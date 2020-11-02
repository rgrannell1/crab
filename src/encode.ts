
import _ from 'lodash'
import * as fs from 'fs'

const asciiToCrab = (content:string) => {
  return _([...content])
    .map(char => {
      const charCode = char.charCodeAt(0)
      return '🦀'.repeat(charCode)
    })
    .join('\n')
    .valueOf()
}

export const encode = (fpath:string) => {
  const content = fs.readFileSync(fpath).toString()
  const output = asciiToCrab(content)

  console.log(output)
}
