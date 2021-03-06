
import tap from 'tap'
import * as revexp from '@rgrannell/revexp'

import {Printer} from '../src/printer.js'

const test = (generator:any) => {
  const content:string[] = []

  const print = new Printer({
    write (result) {
      content.push(result)
      return false
    }
  })

  print.start()

  for (let count = 1; count < 10; ++count) {
    print.add(generator())
  }

  print.end()

  const joined = content.join('\n')
  try {
    JSON.parse(joined)
  } catch (err) {
    console.log(err)
    tap.fail(`failed to parse JSON content:\n${err.message}`)
  }
}

const generator = () => {
  return revexp.builder(revexp.jsonSpec, revexp.jsonSpec.object)
}

for (let ith = 0; ith < 200; ++ith) {
  test(generator)
}

tap.pass(`print always produces parseable JSON`)
