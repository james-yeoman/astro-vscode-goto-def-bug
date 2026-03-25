import type { Utils } from "./utils/utilClass";
declare global {
  namespace App {
    interface Locals {
      utils: Utils;
    }
  }
}
