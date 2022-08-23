<h1 align="center">Async Local Storage Example</h1>

<p align="center">
  Repository to show the usage and benefits of async local storage
</p>

## Table of Contents

* [Preparing environment to contribute](#preparing-environment)
* [Playground](#playground)
* [Building](#building)
* [Linting](#linting)

## Preparing environment

This library has been designed to work with node v16 and npm 8. In order to configure your local environment you can run:

```bash
nvm install 16.0.0
nvm use
npm install npm@8.3.0 -g
npm install
```

## Playground

This repo contains two main scripts for running the examples, ones that works without the async local storage and the other with it.

```bash
npm run start:initial
```


```bash
npm run start:without-storage
```

```bash
npm run start:with-storage
```

## Building

```bash
npm run build
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```
