# nodejs-info-provider

```bash
yarn add @hmcts/info-provider
```

> For nodejs-info-provider to work you'll need to have express installed

```bash
yarn add express
```

Typescript:

```ts
import { InfoContributor, infoRequestHandler  } from '@hmcts/info-provider'

express.Router()
  .get('/info', infoRequestHandler({
    info: {
      'fees-register': new InfoContributor('https://fees-register.com/info')
    },
    extraBuildInfo: {
      featureToggles: config.get('featureToggles'),
      hostname: hostname()
    }
  }))

```

- Javascript -

```js
const { InfoContributor, infoRequestHandler } = require('@hmcts/info-provider')

express.Router()
  .get('/info', infoRequestHandler({
    info: {
      'fees-register': new InfoContributor('http://fees-register.com/info')
    },
    extraBuildInfo: {
      featureToggles: config.get('featureToggles'),
      hostname: hostname()
    }
  }))

```

## Making updates

Clone the repo and make the updates locally e.g. upgrading yarn packages.

If you're upgrading packages, ensure you run `yarn install` before committing.

This repo uses classic Yarn i.e. versions 1.x.

Make sure you bump the version in pacakge.json prior to merging to master.

Releases are managed on [github](https://github.com/hmcts/nodejs-info-provider/releases).

Once the release has been published a github action is run to publish the new version to npmjs.com.
