import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product_category',
  title: 'Product Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'thumbNail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'packages',
      title: 'Packages',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category_package'}}],
    }),
  ],
})
