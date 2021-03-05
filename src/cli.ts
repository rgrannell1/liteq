
import docopt from 'docopt'
import { litq } from './app.js'

const docs = `
Name:
  litq — extract SQLite as JSON.

Usage:
  litq [--] <path> <query>

Description:
  litq retrieves sqlite results as JSON
`

const main = async () => {
  const args = docopt.docopt(docs, {})

  await litq({
    path: args['<path>'],
    query: args['<query>']
  })
}

main()
