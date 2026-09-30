# Pairing-code fix

## Root cause

`lib/Socket/socket.js` had been modified so `requestPairingCode()` defaulted to the literal `ARAB1234` (displayed by the bot as `ARAB-1234`). This is not a server-issued WhatsApp pairing code. The fixed value breaks the pairing-key derivation and prevents a valid link request.

## Fix

The function now follows the official Baileys behavior:

- Generates an 8-character Crockford code from `randomBytes(5)` when no custom code is supplied.
- Keeps the optional custom-code path.
- Rejects custom codes whose length is not exactly 8 characters.
- Removes the fixed `ARAB1234` fallback.

## Tests

- Baileys distribution syntax check: **93 JavaScript files passed**.
- Regression test: **passed** (`npm test`). It verifies random code generation, 8-character format, custom-code length validation, and absence of the fixed placeholder.
- Bot integration test with `249918614328`: **passed the code-generation step**. The bot generated different valid codes (`EDRA-ESMP`, `HQAW-D199`, `GJFY-4PDT`, etc.) instead of `ARAB-1234`.
- The integration run later reached `428 Connection Closed` because the test intentionally stopped/restarted without entering a displayed code in WhatsApp. No account was linked and no real session was retained.

## Deployment

After pulling this commit, reinstall the GitHub dependency in the bot project so npm fetches the updated fork revision:

```bash
npm install --save github:mzml-gg/baileys-by-hulk
```
