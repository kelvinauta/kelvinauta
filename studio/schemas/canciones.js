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
            name: 'lore',
            type: 'text',
            title: "Lore"
        },
        {
            name: 'enlaces',
            type: 'array',
            title: "Enlaces",
            of: [{
                    name: 'youtube',
                    type: 'url',
                    title: 'Youtube',
                },
                {
                    name: 'spotify',
                    type: 'url',
                    title: 'Spotify',
                },
            ]
        },
        {
            name: 'tiktoks',
            type: 'array',
            title: "TikToks",
            of: [{
                    name: 'enalce',
                    type: 'url',
                    title: 'Enlance',
                },

            ]
        },

    ]
}