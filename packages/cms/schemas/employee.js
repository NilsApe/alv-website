export default {
  name: 'employee',
  title: 'Employees',
  type: 'document',
  fields: [
    {
      name: 'firstname',
      title: 'Firstname',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Lastname',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'experience',
      title: 'Years of experience',
      type: 'number',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
    },
    {
      name: 'ytVideoId',
      title: 'YouTube Video ID',
      type: 'string',
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'file',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'employeeTag' } }],
    },
  ],
  preview: {
    select: {
      title: 'firstname',
      subtitle: 'lastname',
      media: 'image',
    },
  },
};
