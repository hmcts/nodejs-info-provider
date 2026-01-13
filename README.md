# nodejs-info-provider

`@hmcts/info-provider` is a small Express helper that aggregates `/info` data from
your service and from downstream services into a single endpoint.

## Installation

```bash
yarn add @hmcts/info-provider
```

## Usage

### Typescript

```ts
import { InfoContributor, infoRequestHandler } from '@hmcts/info-provider'

express.Router().get(
  '/info',
  infoRequestHandler({
    info: {
      'fees-register': new InfoContributor('https://fees-register.com/info')
    },
    extraBuildInfo: {
      featureToggles: config.get('featureToggles'),
      hostname: hostname()
    }
  })
)
```

### JavaScript

```js
const { InfoContributor, infoRequestHandler } = require('@hmcts/info-provider')

express.Router().get(
  '/info',
  infoRequestHandler({
    info: {
      'fees-register': new InfoContributor('https://fees-register.com/info')
    },
    extraBuildInfo: {
      featureToggles: config.get('featureToggles'),
      hostname: hostname()
    }
  })
)
```

`InfoContributor` represents a downstream service that exposes an `/info` endpoint.  
Each contributor is queried when `/info` is requested, and the results are combined  
into a single response.

Failures in downstream `/info` calls do not cause the endpoint itself to fail.

## Requirements

- Node.js >= 18.12
- Express >= 4

Express is a peer dependency and must be provided by the consuming application.

## Contributing

### Getting started

This repository uses **Yarn Berry (v4)** via **Corepack**.

Before installing dependencies, ensure Corepack is enabled:

```bash
corepack enable
```

Then install dependencies:

```bash
yarn install
```

### Making changes

- Make changes on a branch
- Ensure tests pass:

```bash
yarn build
yarn lint
yarn test
```

- If you upgrade dependencies, ensure the lockfile is updated and committed.

### Versioning and releases

This package is released via **GitHub Releases** and published automatically to npm.

To release a new version:

1. Update the `version` field in `package.json`
2. Merge the change into `master`
3. Create a new GitHub Release for that version

Creating the release will trigger a GitHub Actions workflow that:

- builds the package
- publishes it to npm using trusted (OIDC) publishing

You do **not** need to push tags manually.
