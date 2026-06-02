# grandMA3 Toolkit

A reusable library of functions and abstractions for grandMA3 plugin
development. It is intended to be consumed as a peer dependency from your own plugin project.

## Installation

```bash
npm install --save-dev grandma3-toolkit
```

The toolkit declares the grandMA3 toolchain as **peer dependencies** so your
plugin project controls the versions:

```bash
npm install --save-dev \
  grandma3-types \
  lua-types \
  typescript-to-lua
```

Recommended starting point: clone the
[`grandma3-ts-template-plugin`](https://github.com/LightYourWay/grandMA3-ts-template-plugin)
template.

## Usage

Import helpers from the package root:

```ts
import { is } from 'grandma3-toolkit';

const obj = SomeHandleReturningFunction();

if (is.Sequence(obj)) {
  // obj is now typed as Sequence
  Printf('Sequence: %s', obj.name);
}

if (is.DataPools(obj)) {
  // obj is now typed as DataPools
}
```

### Available helpers

#### `is` — class guards

Type guards for grandMA3 object classes. Each guard narrows the input type
based on the result of `GetClass()`.

More helpers will be added over time.

## Development

This package is itself a TypeScript project compiled with the standard
grandMA3 toolchain.

```bash
npm install
npm run check
```

The package ships TypeScript sources directly (`"main": "src/index.ts"`); the
consuming plugin project does the TypeScriptToLua compilation. There is no
build step in this repository.

## Contributing

Issues and pull requests are welcome at
<https://github.com/LightYourWay/grandMA3-toolkit/issues>.

## License

Copyright © 2026 Lukas Runge Veranstaltungstechnik

`grandma3-toolkit` is free software: you can redistribute it and/or modify it
under the terms of the **GNU Lesser General Public License**, version 3 or
(at your option) any later version, as published by the Free Software
Foundation.

This program is distributed in the hope that it will be useful, but
**WITHOUT ANY WARRANTY**; without even the implied warranty of
*MERCHANTABILITY* or *FITNESS FOR A PARTICULAR PURPOSE*. See the GNU Lesser
General Public License for more details.

The full license texts are included in this repository:

- [`COPYING`](./COPYING) — GNU General Public License v3.0
- [`COPYING.LESSER`](./COPYING.LESSER) — GNU Lesser General Public License v3.0

You should have received a copy of the GNU Lesser General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
