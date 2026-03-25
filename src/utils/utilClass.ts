export class Utils {
  constructor() {}

  // Go To References in VSCode doesn't detect the usage in src/pages/index.astro
  public toUpper(str: string) {
    return str.toLocaleUpperCase();
  }
}
