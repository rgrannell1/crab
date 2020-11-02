
import _ from 'lodash'
import * as fs from 'fs'

export const encode = (fpath:string) => {
  const content = fs.readFileSync(fpath).toString()

  let binary = _([...content])
    .map(char => {
      const charCode = char.charCodeAt(0)
      const byte = charCode.toString(2).padStart(8, '0')

      return byte
    })
    .join('')

  const castSize = parseInt(binary, 2)
  console.log(castSize)
}
