import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your work.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link to event',
      type: 'url',
    }),
    defineField({
      name: 'workDetails',
      title: 'Details',
      description: 'ex: Type of work in collaboration with Name, Place (Year)',
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
      title: 'Highlight Project',
      name: 'highlighted',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'coverImage',
      title: 'Documentation image',
      type: 'image',
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
      name: 'workDescription',
      title: 'Work description',
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
