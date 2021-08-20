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
console.log("dasgsdf")
    // Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        canciones,
        siteSettings,
        historias,
        biografia,

        // Objects
        epoca,
        evento,
    ]),
});