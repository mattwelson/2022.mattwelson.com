export default {
  type: "image",
  name: "postImage",
  fields: [
    {
      type: "text",
      name: "alt",
      title: "Alternative text",
      description: `Some of your visitors cannot see images, 
        be they blind, color-blind, low-sighted; 
        alternative text is of great help for those 
        people that can rely on it to have a good idea of 
        what's on your page.`,
      options: {
        isHighlighted: true,
      },
    },
  ],
};
