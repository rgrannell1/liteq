#!/usr/bin/node

import docopt from 'docopt'
import { liteq } from './app.js'

const docs = `
Name:
  liteq — extract SQLite as JSON.

Usage:
  liteq [--] <path> <query>

Description:
  liteq retrieves sqlite results as JSON
`

const main = async () => {
  const args = docopt.docopt(docs, {})

  await liteq({
    path: args['<path>'],
    query: args['<query>']
  })
}

main()
