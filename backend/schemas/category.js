import React from "react";

export default {
  title: "Category",
  name: "category",
  type: "document",
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
          { title: "Red", value: "#f44336" },
          { title: "Pink", value: "#e81e62" },
          { title: "Purple", value: "#9c27b0" },
          { title: "Indigo", value: "#3f51b5" },
          { title: "Blue", value: "#2196f3" },
          { title: "Cyan", value: "#00bcd4" },
          { title: "Teal", value: "#009688" },
          { title: "Green", value: "#4caf50" },
          { title: "Lime", value: "#cddc39" },
          { title: "Amber", value: "#ffc107" },
          { title: "Orange", value: "#ff9800" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      colour: "colour",
    },
    prepare({ title, colour }) {
      return {
        title,
        media: <span style={{ color: colour.value }}>{title[0]}</span>,
      };
    },
  },
};
