import { db, MetaData, Comment } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(MetaData).values([
    {
      blog: "advent-of-code-2024",
      views: 21,
      likes: 2,
    },
    {
      blog: "meta-analysis-on-reducing-screentime",
      views: 40,
      likes: 4,
    },
    {
      blog: "squarea_10",
      views: 1,
      likes: 0,
    },
  ]);
}
