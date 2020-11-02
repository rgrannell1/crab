

import _ from 'lodash'
import * as fs from 'fs'

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

class DispleasedCrabsException extends Error {
  constructor(message: string) {
    super(message)
    this.name = "DispleasedCrabs"
  }
}

export const run = (fpath: string) => {
  const content = fs.readFileSync(fpath).toString()
  const charSet = new Set([...content])

  if (charSet.has('🦞')) {
    throw new JordanPetersonException('a lobster is not a crab')
  } else if (!charSet.has('🦀') || charSet.size > 2) {
    throw new CarcinisationException('there is only lines of crab.')
  }

  const program = _([content])
    .split('\n')
    .map(crabs => {
      return String.fromCharCode([...crabs].length)
    })
    .join('')
    .valueOf()

  try {
    eval(program)
  } catch (err) {
    throw new DispleasedCrabsException(err.message)
  }
}
