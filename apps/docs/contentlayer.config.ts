import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Documentation = defineDocumentType(() => ({
  name: "Documentation",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/docs/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Documentation],
});
