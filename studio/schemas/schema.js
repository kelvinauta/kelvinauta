// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import siteSettings from "./siteSettings";
import canciones from "./canciones";
import historias from "./historias";
import biografia from "./biografia";
import evento from "./objects/evento";
import epoca from "./objects/epoca";
import enlaces from "./objects/enlaces";
import contactos from "./objects/contactos";
import redessociales from "./objects/redessociales";
import fotos from "./objects/fotos";    
import creditoColaboracion from "./objects/creditoColaboracion";
import museoArte from "./museoArte";
    // Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        historias,
        canciones,
        biografia,
        siteSettings,
        museoArte,
        // Objects
        epoca,
        evento,
        enlaces,
        contactos,
        redessociales,
        fotos,
        creditoColaboracion
    ]),
});