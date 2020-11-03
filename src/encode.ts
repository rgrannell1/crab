
import * as fs from 'fs'
import CrabLang from './language.js'

export const encode = (fpath:string) => {
  const content = fs.readFileSync(fpath).toString()

  console.log(CrabLang.encode(content))
}
