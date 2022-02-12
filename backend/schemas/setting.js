export default {
  title: "Settings",
  name: "setting",
  type: "document",
  fields: [
    {
      title: "Footer links",
      name: "footer",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};
