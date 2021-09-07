export default {
    name: 'museoarte',
    title: 'Museo de arte',
    type: 'document',
    fields: [{
        name: "title",
        type: "string",
        title: "Title"
    },
    {
        name: 'descripcion',
        type: 'text',
        title: "Descripcion"
    },
    {
        name: 'imagen',
        type: 'image',
        title: "Imagen"
    },
    {
        name: 'contenido',
        type: 'array',
        of: [{ type: 'block' }],
        title: "Contenido"
    },
    {
        name: 'musica',
        type: 'url',
        title: "Musica"
    },
    {
        name: 'colabaracion',
        type: 'boolean',
        title: "Colaboracion"
    },
    {
        name: 'creditos',
        type: 'array',
        title: "Creditos",
        of: [{ type: 'creditoColaboracaion', }]
    },



    ]
}