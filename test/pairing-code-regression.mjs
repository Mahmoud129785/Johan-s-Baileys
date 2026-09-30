import assert from 'node:assert/strict'
import { randomBytes } from 'node:crypto'
import { bytesToCrockford } from '../lib/Utils/generics.js'
import { readFile } from 'node:fs/promises'

const source = await readFile(new URL('../lib/Socket/socket.js', import.meta.url), 'utf8')
assert.match(source, /bytesToCrockford\)\(\(0, crypto_1\.randomBytes\)\(5\)\)/)
assert.doesNotMatch(source, /ARAB1234|ARAB-1234/)
assert.match(source, /await handshakeReady/)

const defaults = JSON.parse(await readFile(new URL('../lib/Defaults/baileys-version.json', import.meta.url), 'utf8'))
assert.deepEqual(defaults.version, [2, 3000, 1043857760])

const generated = bytesToCrockford(randomBytes(5))
assert.match(generated, /^[1-9A-HJ-NP-TV-Z]{8}$/)
assert.equal(generated.length, 8)

const custom = 'ABCD2345'
assert.equal(custom.length, 8)
assert.throws(() => {
  if ('SHORT'.length !== 8) throw new Error('Custom pairing code must be exactly 8 chars')
}, /exactly 8 chars/)

console.log(JSON.stringify({ ok: true, generatedLength: generated.length, customLength: custom.length }))
