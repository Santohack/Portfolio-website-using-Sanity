export default {
  name: "services",
  type: "document",
  title: "Services",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
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
