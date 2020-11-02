
import docopt from 'docopt'

import {
  encode
} from './encode.js'

const docs = `
Usage:
  crab encode <fpath>
  crab run <fpath>

Description:
  carcinisation, but for programming languages.
`

const args = docopt.docopt(docs, {})

if (args.run) {

} else {
  encode(args['<fpath>'])
}
