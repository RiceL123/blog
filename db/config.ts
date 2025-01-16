import { defineDb, defineTable, column } from "astro:db";

const MetaData = defineTable({
  columns: {
    blog: column.text({ primaryKey: true }),
    views: column.number(),
    likes: column.number(),
  },
});

const Comment = defineTable({
  columns: {
    author: column.text(),
    body: column.text(),
    date: column.date(),
    blog: column.text({ references: () => MetaData.columns.blog }),
  },
});

export default defineDb({
  tables: { Comment, MetaData },
});
