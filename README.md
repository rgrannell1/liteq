
# Liteq [![CI](https://github.com/rgrannell1/liteq/actions/workflows/ci.yaml/badge.svg)](https://github.com/rgrannell1/liteq/actions/workflows/ci.yaml)

Liteq executes SQL queries and captures the results as JSON.

```sh
liteq castle.db.sqlite 'SELECT id FROM address'
```

## Stability Index

1, Experimental - This project might die, it's undertested and underdocumented, and redesigns and breaking changes are likely

### Files

```
.github/workflows/
  ci.yaml              github workflow
src/
  app.ts               the core application
  cli.ts               the CLI interface
  printer.ts           print streaming JSON

test/
  printer.test.ts      test printer always produces valid JSON
snapcraft.yaml         snapcraft file
tsconfig.json          typescript configuration
```

### Installation

#### Snapcraft

```sh
snapcraft
sudo snap remove liteq
sudo snap install liteq_v0.1.0_amd64.snap --dangerous --devmode
```

#### Npm

```sh
npm install --global @rgrannell/liteq
```

### Tests

### Build

```js

```

### License

The MIT License

Copyright (c) 2021 Róisín Grannell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
