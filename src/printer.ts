
type Writer = {
  write (value: string): boolean
}

export class Printer {
  buffer: any
  writer: Writer
  constructor(writer: Writer = process.stdout) {
    this.writer = writer
  }
  start() {
    this.writer.write('[\n')
  }
  add(row: any) {
    if (this.buffer) {
      this.writer.write(JSON.stringify(this.buffer))
      this.writer.write(', ')
    }

    this.buffer = row
  }
  end() {
    this.writer.write(JSON.stringify(this.buffer))
    this.writer.write(']\n')
  }
}
