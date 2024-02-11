import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import filter from "leo-profanity";

export const petitionRouter = createTRPCRouter({
  getList: publicProcedure.query(
    async ({ ctx }) => await ctx.db.petition.findMany(),
  ),

  addEntry: publicProcedure
    .input(z.object({ name: z.string().min(1).max(50) }))
    .mutation(async ({ ctx, input }) => {
      const ip = ctx.headers.get("x-forwarded-for");

      // Cant believe I have to do this.
      if (filter.check(input.name) || input.name === "asdf") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "PROFANITY",
        });
      }
      return ctx.db.petition.create({
        data: {
          name: input.name,
          ip,
        },
      });
    }),
});
