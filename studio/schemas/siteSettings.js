export default {
    name: "siteSettings",
    type: "document",
    title: "Site Settings",
    fields: [{
            name: "title",
            type: "string",
            title: "Site title",
        },
        {
            name: "meta",
            type: "image",
            title: "Meta IMG",
        },
        {
            name: "icono",
            type: "image",
            title: "Icono del sitio web",
        },
        {
            name: "contacto",
            type: "array",
            title: "Contacto",
            of: [{type:"contactos"}
            ],
        },
        {
            name: "enlaces",
            type: "array",
            title: "Enlaces",
            of: [{type:"redessociales"}
            ],
        },
    ],
};