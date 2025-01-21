import { db, sql, MetaData, eq } from "astro:db";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  incrementLikes: defineAction({
    input: z.object({
      blog: z.string(),
    }),
    handler: async (input) => {
      const updatedLikes = await db
        .update(MetaData)
        .set({ likes: sql`${MetaData.likes} + 1` })
        .where(eq(MetaData.blog, input.blog))
        .returning();
      return updatedLikes;
    },
  }),
};
