
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'
import signale from 'signale'
import * as fs from 'fs'

import { Printer } from './printer.js'
import constants from './constants.js'

interface liteqArgs {
  path: string,
  query: string
}

export const liteq = async (args: liteqArgs) => {
  try {
    await fs.promises.access(args.path)
  } catch (err) {
    if (err.code === 'ENOENT') {
      signale.fatal(`database ${constants.errorCodes.dbMissing}: ${args.path} does not exist`)
      process.exit(1)
    }
  }

  try {
    var conn = await open({
      filename: args.path,
      driver: sqlite3.Database
    })
  } catch (err) {
    signale.fatal(`${constants.errorCodes.failedOpen}: ${err.message}`)
    process.exit(1)
  }

  const printStream = new Printer()

  printStream.start()

  try {
    await conn.each(args.query, (err, row) => {
      if (err) {
        throw err
      } else {
        printStream.add(row)
      }
    })
  } catch (err) {
    signale.fatal(`${constants.errorCodes.failedRead}: ${err.message}`)
    process.exit(1)
  } finally {
    printStream.end()
    conn.close()
  }
}
