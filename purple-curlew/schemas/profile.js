export default {
  name: "profile",
  type: "document",
  title: "Profile",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "about",
      type: "string",
      title: "About",
    },
    {
      name: "fbLink",
      type: "string",
      title: "facebook Url",
    },
    {
      name: "igLink",
      type: "string",
      title: "Instagram Url",
    },
    {
      name: "lkLink",
      type: "string",
      title: "LinkedIn Url",
    },
    {
      name: "twLink",
      type: "string",
      title: "twitter Url",
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
