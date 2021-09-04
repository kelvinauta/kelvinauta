const path = require(`path`)


  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const result = await graphql(`
      {
        canciones: allSanityCanciones {
          nodes {
            slug
          }
        }
        historias: allSanityHistorias {
          nodes {          
            slug            
          }
        }
      }
    `)
  
   
    if (result.errors) {
      return;
    }
  
    result.data.canciones.nodes.forEach(cancion => {
      createPage({
        path:"/cancion/"+cancion.slug,
        component:path.resolve("./src/templates/cancionTemplate.jsx"),
        context:{slug:cancion.slug}
    })
    })
    result.data.historias.nodes.forEach(historia => {
      createPage({
        path:"/historia/"+historia.slug,
        component:path.resolve("./src/templates/historiaTemplate.jsx"),
        context:{slug:historia.slug}
    })
    })
  
   
  }