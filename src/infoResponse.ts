export class InfoResponse {
  build: object;
  [key: string]: object | undefined;

  constructor(build: object) {
    this.build = build;
  }
}
