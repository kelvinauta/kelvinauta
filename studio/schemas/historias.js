export default {
    name: 'historias',
    title: 'Historias',
    type: 'document',
    fields: [{
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: 'description',
            type: 'text',
            title: "Description"
        },
        {
            name: 'body',
            type: 'text',
            title: "Body"
        },
        {
            name: 'banner',
            type: 'image',
            title: "Banner"
        },

    ]
}