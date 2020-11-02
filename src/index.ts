

import _ from 'lodash'
import * as fs from 'fs'
import converter from '@cheprasov/base-converter'
const { BaseConverter } = converter

class JordanPetersonException extends Error {
  constructor (message:string) {
    super(message)
    this.name = "JordanPetersonException"
  }
}

class CarcinisationException extends Error {
  constructor(message: string) {
    super(message)
    this.name = "CarcinisationException"
  }
}

class TooFewCrabsException extends Error {
  constructor(message: string) {
    super(message)
    this.name = "TooFewCrabsException"
  }
}

const content = fs.readFileSync(process.argv[2]).toString()
const charSet = new Set([...content])

if (charSet.has('🦞')) {
  throw new JordanPetersonException('a lobster is not a crab')
} else if (!charSet.has('🦀') || charSet.size > 1) {
  throw new CarcinisationException('there is only crab.')
}

// -- unary value of program.
const castSize = [...content].length
const binary = castSize.toString(2)

if (binary.length % 8 !== 0) {
  throw new TooFewCrabsException(`try adding more crabs ${binary.length}`)
}

// -- group into eight bits
const chars = _(binary)
  .split('')
  .chunk(8)
  .map(byte => byte.map(Number).join(''))
  .map(byte => {
    const codePoint = parseInt(byte, 2)
    return {
      codePoint,
      char: String.fromCharCode(codePoint)
    }
  })
  .value()
