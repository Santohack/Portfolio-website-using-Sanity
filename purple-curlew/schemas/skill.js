export default {
  name: "skill",
  type: "document",
  title: "Skills",
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
      name: "efficiency",
      type: "string",
      title: "Efficiency",
    },
    {
      name: "per",
      type: "string",
      title: "Efficiency %",
    },
  ],
};
