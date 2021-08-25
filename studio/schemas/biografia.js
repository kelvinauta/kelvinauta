export default {
    name: "biografy",
    title: "Biografía",
    type: "document",
    fields: [{
            name: "foto",
            type: "array",
            title: "Fotos",
            of: [{type:"fotos"}
            ],
        },
        {
            name: "epocas",
            type: "array",
            title: "Epocas",
            of: [{ type: "epoca" }],
        },
    ],
};