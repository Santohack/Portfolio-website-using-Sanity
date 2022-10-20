export default {
  name: "about",
  type: "document",
  title: "About Us",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "desc",
      type: "string",
      title: "Description",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
