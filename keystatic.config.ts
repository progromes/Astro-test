import { config, fields, collection,singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'astro-test/s121',
  },
  
  
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'description', multiline: false } ),
        ogType: fields.text({ label: 'ogType', multiline: false } ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images/posts',
            publicPath: '../../../assets/images/posts/',
          },
        }),
      },
    }),
    page: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'description', multiline: false } ),
        ogType: fields.text({ label: 'ogType', multiline: false } ),
        NavHeader: fields.checkbox({
          label: 'Show Link with Header',
        }),
        NavFooter: fields.checkbox({
          label: 'Show Link with Footer',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images/pages',
            publicPath: '../../../assets/images/pages/',
          },
        }),
      },
    }),
  },
  singletons: {
    seo: singleton({
      label: 'SEO',
      path: 'src/content/seo/',
      format: { contentField: 'scripts' },
      schema: {
        lang: fields.text({ label: 'lang', multiline: false } ),
        ogSiteName: fields.text({ label: 'ogSiteName', multiline: false } ),
        ogLocal: fields.text({ label: 'ogLocal', multiline: false } ),
        favicon: fields.image({ label: 'favicon', directory: 'public/' }),
        scripts: fields.document({
          label: 'scripts',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images/posts',
            publicPath: '../../assets/images/posts/',
          },
        }),
      },
    }),
    MainPage: singleton({
      label: 'Main Page',
      path: 'src/content/MainPage/',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'title', multiline: false } ),
        description: fields.text({ label: 'description', multiline: false } ),
        ogType: fields.text({ label: 'ogType', multiline: false } ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images/main',
            publicPath: '../../assets/images/main/',
          },
        }),
      }
    }),
    PostPage: singleton({
      label: 'Posts Page',
      path: 'src/content/PostPage/',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'title', multiline: false } ),
        description: fields.text({ label: 'description', multiline: false } ),
        ogType: fields.text({ label: 'ogType', multiline: false } ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images/posts',
            publicPath: '../../assets/images/posts/',
          },
        }),
      }
    }),
  },
});
