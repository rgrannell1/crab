
import * as fs from 'fs'

import {
  DispleasedCrabsException
} from './errors'
import CrabLang from './language'

export const run = (fpath: string) => {
  const content = fs.readFileSync(fpath).toString()
  const program = CrabLang.decode(content)

  try {
    eval(program)
  } catch (err) {
    throw new DispleasedCrabsException(err.message)
  }
}
