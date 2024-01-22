import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'discography',
  title: 'Discography',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      title: 'Highlight Album',
      name: 'highlighted',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'title',
      description: 'This field is the title of your project.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      description: 'This field is the date of your project.',
      title: 'Date',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),

    defineField({
      name: 'coverImage',
      title: 'Album cover',
      description: 'One image of the album cover',
      type: 'image',
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Alternative text for screenreaders. ',
        }),
      ],
    }),

    defineField({
      name: 'quote',
      title: 'Review/Quote',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [],
        }),
      ],
    }),

    defineField({
      name: 'productionInfo',
      title: 'Production information',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [],
        }),
      ],
    }),
  ],
})
