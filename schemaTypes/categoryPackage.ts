import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category_package',
  title: 'Product Category Package',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'isFavorite',
      title: 'Is Favorite',
      type: 'boolean',
    }),
    defineField({
      name: 'chargeUnit',
      title: 'Charge Unit',
      type: 'string',
    }),
    defineField({
      name: 'min',
      title: 'Minimum',
      type: 'number',
    }),
    defineField({
      name: 'max',
      title: 'Maximum',
      type: 'number',
    }),
    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'optionTitle',
              title: 'Option Title',
              type: 'string',
            }),
            defineField({
              name: 'optionValue',
              title: 'Option Value',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'optionTitle',
              optionValue: 'optionValue', // Display the value of the first option
            },
            prepare({title, optionValue}) {
              return {
                title: title || 'Untitled Package',
                subtitle: optionValue ? `Value: ${optionValue}` : 'No option value',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'chargeUnit',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Untitled Package',
        subtitle: subtitle ? `Charge Unit: ${subtitle}` : 'No charge unit',
      }
    },
  },
})
