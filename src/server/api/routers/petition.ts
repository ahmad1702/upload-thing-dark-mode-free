import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const petitionRouter = createTRPCRouter({
  getList: publicProcedure.query(({ ctx }) => {
    return ctx.db.petition.findMany({});
  }),

  addEntry: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.petition.create({
        // orderBy: { : "desc" },
        data: {
          name: input.name,
        },
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
