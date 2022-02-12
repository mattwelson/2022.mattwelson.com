export default {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
    },
    {
      title: "Href",
      name: "href",
      type: "slug",
    },
    // Do I want to have a flag for internal or external links?
  ],
};
