import * as express from 'express'

import { InfoConfig } from './infoConfig'
import { loadVersionFile } from './versionFile'

export function infoRequestHandler (config: InfoConfig): express.RequestHandler {
  return (req: express.Request, res: express.Response) => {
    const entries = Object.entries(config.info)

    const promises = entries.map((entry) => entry[1].call())
    const all = Promise.all(promises)

    const downstreamsPromise = all.then(results => {
      return results.map((result, i) => {
        return [entries[i][0], result]
      })
        .reduce((prev, curr) => ({ ...prev, [curr[0]]: curr[1] }), {})
    })

    Promise.all([loadVersionFile(), downstreamsPromise])
      .then(([versionFile, downstreams]) => {
          const json = {
            build: versionFile,
            ...downstreams,
            extraBuildInfo: config.extraBuildInfo
          }
          res.json(json)
        }
      )

  }
}
