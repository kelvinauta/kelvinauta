export default {
    name: 'biografy',
    title: 'Biografy',
    type: 'document',
    fields: [{
            name: 'fotos',
            type: 'array',
            title: "fotos",
            of: [{
                    name: 'src',
                    type: 'url',
                    title: 'Src',
                },
                {
                    name: 'title',
                    type: 'string',
                    title: 'Title',
                },
                {
                    name: 'description',
                    type: 'string',
                    title: 'Description',
                }
            ]
        },
        {
            name: 'epocas',
            type: 'array',
            title: "Epocas",
            of: [{
                    name: 'year',
                    type: 'date',
                    title: 'Year',
                },


            ]
        }
    ]
}