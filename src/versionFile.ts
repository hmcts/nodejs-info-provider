import * as fs from 'fs-extra'
import * as yaml from 'js-yaml'

export function loadVersionFile(): Promise<string> {
  const versionFilePath = `${process.env.NODE_PATH || '.'}/version`
  return fs.readFile(versionFilePath)
    .then((rawVersionFile: Buffer) => yaml.safeLoad(rawVersionFile.toString()))
}
