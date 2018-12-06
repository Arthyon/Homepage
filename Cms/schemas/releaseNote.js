export default {
  name: 'releaseNote',
  title: 'Release Note',
  type: 'document',
  fields: [
    {
      name: 'version',
      title: 'Version',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'version',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'date',
      options: {
        dateFormat: 'D MMM YYYY',
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'version',
      subtitle: 'releaseDate',
      media: 'mainImage'
    },
  }
}
