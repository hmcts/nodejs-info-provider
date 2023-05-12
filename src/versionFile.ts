import { readFile } from 'node:fs/promises';
import * as yaml from 'js-yaml';

export function loadVersionFile(): Promise<object> {
  const versionFilePath = `${process.env.NODE_PATH || '.'}/version`;
  return readFile(versionFilePath)
    .then((rawVersionFile: Buffer) => yaml.load(rawVersionFile.toString()))
    .catch(() => {
      return { version: 'unknown' };
    }) as Promise<object>;
}
