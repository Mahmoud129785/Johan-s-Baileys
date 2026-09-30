# Pairing-code fix

## Root cause

The failure had three causes:

1. `lib/Socket/socket.js` had been modified so `requestPairingCode()` defaulted to the literal `ARAB1234` (displayed by the bot as `ARAB-1234`). This is not a server-issued WhatsApp pairing code.
2. The fork advertised an outdated WhatsApp Web version, causing the server to reject/close the handshake.
3. `requestPairingCode()` could race the Noise handshake when called from `connection.update: connecting`, producing `Connection Closed (428)`.

## Fix

The function now follows the official Baileys behavior:

- Generates an 8-character Crockford code from `randomBytes(5)` when no custom code is supplied.
- Keeps the optional custom-code path.
- Rejects custom codes whose length is not exactly 8 characters.
- Removes the fixed `ARAB1234` fallback.
- Updates the WhatsApp Web version to `[2, 3000, 1043857760]`.
- Waits for the completed Noise handshake before sending the pairing registration stanza.

## Tests

- Baileys distribution syntax check: **93 JavaScript files passed**.
- Regression test: **passed** (`npm test`). It verifies random code generation, 8-character format, custom-code length validation, and absence of the fixed placeholder.
- Minimal Baileys integration test with `249918614328`: **passed**. It generated `4ENQYY75` after the handshake and received WhatsApp's pairing response.
- Full uploaded bot integration test with `249918614328`: **passed**. It generated `PXPJ-Y6A7` and did not emit `428 Connection Closed`.
- The code was displayed but not entered in WhatsApp during the automated run; no account was linked and no real session was retained.

## Deployment

After pulling this commit, reinstall the GitHub dependency in the bot project so npm fetches the updated fork revision:

```bash
npm install --save github:mzml-gg/baileys-by-hulk
```
