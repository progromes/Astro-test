import { config, fields, collection,singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'astro-test/astro-test',
  },
  
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
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
            publicPath: '../../assets/images/posts/',
          },
        }),
      },
    }),
    page: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
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
            publicPath: '../../assets/images/pages/',
          },
        }),
      },
    }),
  },
  singletons: {
    seo: singleton({
      label: 'SEO',
      path: 'src/content/Seo',
      schema: {
        lang: fields.text({ label: 'lang', multiline: false } ),
        ogSiteName: fields.text({ label: 'ogSiteName', multiline: false } ),
        favicon: fields.image({ label: 'favicon', directory: 'public/' }),
        scripts: fields.document({
          label: 'Scripts',
          formatting: true,
          dividers: true,
          links: true,
        }),
      }
    }),
    MainPage: singleton({
      label: 'Main Page',
      path: 'src/content/MainPage',
      schema: {
        
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
        seoScripts: fields.document({
          label: 'SEO Scripts',
          formatting: true,
          dividers: true,
          links: true,
        }),
      }
    }),
  },
});
