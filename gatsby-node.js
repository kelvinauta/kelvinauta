const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      canciones: allSanityCanciones {
        nodes {
          id
          lore
          tiktoks
          title
          slug

          contenido {
            style
            _type
            _key
            children {
              marks
              text
              _type
              _key
            }
          }
          enlace {
            spotify
            youtube
          }
        }
      }
      historias: allSanityHistorias {
        nodes {
          description
          slug
          title
          contenido {
            children {
              marks
              text
              _type
              _key
            }
            style
            _key
            _type
            list
          }
          banner {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    return;
  }

  // result.data.canciones.nodes.forEach((cancion) => {
  //   createPage({
  //     path: "/cancion/" + cancion.slug,
  //     component: path.resolve("./src/templates/cancionTemplate.jsx"),
  //     context: cancion,
  //   });
  // });
  // result.data.historias.nodes.forEach((historia) => {
  //   createPage({
  //     path: "/historia/" + historia.slug,
  //     component: path.resolve("./src/templates/historiaTemplate.jsx"),
  //     context: historia,
  //   });
  // });
};
