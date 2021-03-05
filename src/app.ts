
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'
import signale from 'signale'

import { Printer } from './printer.js'

interface litqArgs {
  path: string,
  query: string
}

export const litq = async (args: litqArgs) => {
  const conn = await open({
    filename: args.path,
    driver: sqlite3.Database
  })

  const printStream = new Printer()

  printStream.start()

  try {
    await conn.each(args.query, (err, row) => {
      printStream.add(row)
    })
  } catch (err) {
    signale.fatal(`liteq: ${err.message}`)
  } finally {
    printStream.end()
    conn.close()
  }
}
