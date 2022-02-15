export default {
  title: "Category",
  name: "category",
  type: "object",
  fields: [
    {
      title: "Title",
      type: "string",
      name: "title",
    },
    {
      title: "Colour",
      description: "Pick a color",
      name: "colour",
      type: "colorlist", // required
      options: {
        list: [
          { title: "Red", value: "#f16d70" },
          { title: "Teal", value: "#88c6db" },
          { title: "Purple", value: "#aca0cc" },
          { title: "Green", value: "#bdcdcb" },
        ],
      },
    },
  ],
};
