export default {
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
        {
            name: 'url',
            title: 'Video URL',
            type: 'url',
            validation: Rule => Rule.required().uri({
                allowRelative: true,
            }),
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
    ],
};