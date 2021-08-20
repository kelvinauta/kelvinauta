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
            of: [{
                    name: "email",
                    type: "email",
                    title: "Email",
                },
                {
                    name: "celular",
                    type: "string",
                    title: "Celular",
                },
            ],
        },
        {
            name: "enlaces",
            type: "array",
            title: "Enlaces",
            of: [{
                    name: "facebook",
                    type: "url",
                    title: "Facebook",
                },
                {
                    name: "tiktok",
                    type: "url",
                    title: "TikTok",
                },
                {
                    name: "instagram",
                    type: "url",
                    title: "Instagram",
                },
                {
                    name: "discord",
                    type: "url",
                    title: "Discord",
                },
                {
                    name: "youtube",
                    type: "url",
                    title: "Youtube",
                },
                {
                    name: "spotify",
                    type: "url",
                    title: "Spotify",
                },
            ],
        },
    ],
};