import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

import type { Petition } from "@prisma/client";

function doesContainHateSpeech(input: string) {
  input = input.toLowerCase();
  let result = false;
  // Sorry for putting this in the codebase,
  // but I need to give a string to filter against
  const slurs = [
    "nigger",
    "n i g g e r",
    "niger",
    "nigga",
    "niga",
    " nig ", // the spaces on either side are to make sure this is on it's own
    "beaner",
    "chink",
  ];

  slurs.forEach((value: string) => {
    if (input.includes(value)) result = true;
  });
  return result;
}

export const petitionRouter = createTRPCRouter({
  getList: publicProcedure.query(async ({ ctx }) => {
    const result = new Array<Petition>();
    const fetched = await ctx.db.petition.findMany({});
    fetched.forEach((value) => {
      if (!doesContainHateSpeech(value.name ?? "")) {
        result.push(value);
      }
    });
    return result;
  }),

  addEntry: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      if (doesContainHateSpeech(input.name)) return;
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
