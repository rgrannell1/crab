
import * as fs from 'fs'
import CrabLang from './language'

export const encode = (fpath:string) => {
  const content = fs.readFileSync(fpath).toString()

  console.log(CrabLang.encode(content))
}
