export default {
    name: 'canciones',
    title: 'Canciones',
    type: 'document',
    fields: [{
        name: "title",
        type: "string",
        title: "Title"
    },
    {
        name: 'letra',
        type: 'text',
        title: "Letra"
    },
    {
        name: 'slug',
        type: 'string',
        title: "Slug"
    },
    {
        name: 'lore',
        type: 'text',
        title: "Lore"
    },
    {
        name: 'enlace',
        type: 'array',
        title: "Enlace",
        of: [{ type: 'enlaces', }]
    },

    {
        name: 'tiktoks',
        type: 'array',
        title: "TikToks",
        of: [{type: 'url',},

        ]
    },

    ]
}