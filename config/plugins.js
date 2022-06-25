module.exports = ({ env }) => {
  return {
    ckeditor: "true",
    seo: {
      enabled: "true",
    },
    navigation: {
      enabled: "true",
      config: {
        additionalFields: ["audience"],
        contentTypes: ["api::page.page"],
        contentTypesNameFields: {
          "api::page.page": ["title"],
        },
        allowedLevels: 2,
      },
    },
    slugify: {
      enabled: "true",
      config: {
        contentTypes: {
          post: {
            field: "slug",
            references: "title",
          },
        },
      },
    },
  };
};
