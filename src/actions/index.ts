import { z } from "astro/zod";
import { defineAction } from "astro:actions";

export const server = {
  getUpperCase: defineAction({
    input: z.string(),
    handler: (str, ctx) => {
      return ctx.locals.utils.toUpper(str);
    },
  }),
};
