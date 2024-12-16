# Contributing

## Introduction

This exists as a personal sandbox, so I do not expect external contributors.
However, if you want to contribute, follow this guide to set up your local development.
I also expect an Issue created and discussed prior to a pull request.

Feel free to use Discussions to chat about ideas, too.

## Prerequisites

You need a Telerik Kendo UI React license.
Without one, the application will have watermarks.

## Getting started

- Node (I recommend using [fnm](https://fnm.vercel.app/))

- Enable and use corepack ([docs](https://nodejs.org/api/corepack.html)) - This workspace uses pnpm

- Install and run

  ```shell
  pnpm install
  pnpm start
  ```

- To build and test, run the corresponding commands

  ```shell
  pnpm run build:debug
  pnpm run test:debug
  ```

  The main targets have `debug` and `release` suffixes to match .NET’s configuration.
  For example, `build:debug` applies formatting changes while `build:release` checks formatting.

- To emulate the CI pipeline, run the release targets.

  ```shell
  pnpm run-s build:release test:release
  ```

## Additional information

### Chosen tools

When starting open source projects, I explore the latest innovations in the ecosystem.
[oxc: The JavaScript Oxidation Compiler](https://oxc.rs) interested me the most.

oxc has ties to [VoidZero](https://voidzero.dev), which seeks to build next generation tooling for the web.
They include the creators and maintainers of Vite and Vitest, which made me want to choose oxc and other VoidZero tools for this workspace.

Unfortunately, oxc does not seem _quite_ ready (the formatter is still under development), so I looked at [projects using oxc](https://oxc.rs/docs/guide/projects.html).
It mentioned [Biome](https://biomejs.dev), which I had come across at the same time as oxc.

Biome has some shared history with oxc creators, and both tools benefit each other as they explore approaches to the new generation of tooling.
I plan to use it for linting and formating.

For now, the repository has no task caching.
