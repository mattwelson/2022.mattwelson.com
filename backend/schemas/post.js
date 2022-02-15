export default {
  title: "Blog post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      type: "string",
      name: "title",
    },
    { title: "Category", name: "category", type: "category" },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "postImage",
        },
      ],
    },
    {
      title: "Tags",
      name: "tag",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
