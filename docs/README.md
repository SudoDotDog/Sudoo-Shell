# Sudoo-Shell

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Shell/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Shell/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Shell/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Shell)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fshell.svg)](https://www.npmjs.com/package/@sudoo/shell)
[![downloads](https://img.shields.io/npm/dm/@sudoo/shell.svg)](https://www.npmjs.com/package/@sudoo/shell)

Shell Utilities for NodeJS

## Install

```sh
yarn add @sudoo/shell
# Or
npm install @sudoo/shell --save
```

## Usage

To execute a command via shell

```ts
import { shellExecuteCommand } from "@sudoo/shell";

(async () => {
    const result = await shellExecuteCommand('git stash');
})();
```
