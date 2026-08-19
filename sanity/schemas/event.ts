import {defineField, defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'e.g. "September 16-18, 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g. "09:00 AM - 06:00 PM"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "BEIC, Bengaluru, India"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Event banner / cover image.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Trade Fair', value: 'Trade Fair'},
          {title: 'Expo', value: 'Expo'},
          {title: 'Summit', value: 'Summit'},
          {title: 'Webinar', value: 'Webinar'},
          {title: 'Fair', value: 'Fair'},
          {title: 'Conference', value: 'Conference'},
          {title: 'Workshop', value: 'Workshop'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attendees',
      title: 'Expected Attendees',
      type: 'string',
      description: 'e.g. "10000+"',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
  },
})
