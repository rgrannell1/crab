
import _ from 'lodash'

import {
  JordanPetersonException,
  CarcinisationException
} from './errors'

const jsToCrab = (content: string) => {
  return _([...content])
    .map(char => {
      // -- probably won't handle delegate pairs well.
      const charCode = char.charCodeAt(0)
      return '🦀'.repeat(charCode)
    })
    .join('\n')
    .valueOf()
}

const crabToJS = (content:string) => {
  const charSet = new Set([...content])

  if (charSet.has('🦞')) {
    throw new JordanPetersonException('a lobster is not a crab')
  } else if (!charSet.has('🦀') || charSet.size > 2) {
    throw new CarcinisationException('there is only lines of crab.')
  }

  return _([content])
    .split('\n')
    .map(crabs => {
      return String.fromCharCode([...crabs].length)
    })
    .join('')
    .valueOf()
}

export default class CrabLang {
  static encode (code:string) {
    return jsToCrab(code)
  }
  static decode (code:string) {
    return crabToJS(code)
  }
}
