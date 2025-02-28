import { IoPeopleSharp } from 'react-icons/io5';

export default {
  name: 'employee',
  title: 'Employees',
  icon: IoPeopleSharp,
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
  ],
  preview: {
    select: {
      title: 'firstname',
      subtitle: 'lastname',
      media: 'image',
    },
  },
};
