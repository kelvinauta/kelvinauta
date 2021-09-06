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
            name: "slug",
            type: "string",
            title: "Slug"
        },
        {
            name: 'description',
            type: 'text',
            title: "Description"
        },
        {
            name: 'contenido',
            type: 'array',
            of: [{ type: 'block' }],
            title: "Contenido"
        },
        {
            name: 'banner',
            type: 'image',
            title: "Banner"
        },

    ]
}