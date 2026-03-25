import { defineMiddleware } from "astro:middleware";
import { Utils } from "./utils/utilClass";

export const onRequest = defineMiddleware((ctx, next) => {
  ctx.locals.utils = new Utils();
  return next();
});
