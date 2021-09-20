const countapi = require("countapi-js");
const count = (slug) => {
  if (
    typeof window !== "undefined" &&
    window.location &&
    window.location.hostname
  ) {
    let hostname = "kelvinauta.com";
    if (window.location.hostname !== "kelvinauta.com") {
      hostname = "kelvinauta.com.dev";
    }
    if (slug && typeof slug == "string") {
      countapi
        .hit(hostname, slug)
        .then((result) => {
          console.log(`${hostname}/${slug} = ${result.value} vistas`);
        })
        .catch((e) => {
          console.log(e);
          console.log(slug);
        });
    } else {
      countapi
        .hit(hostname)
        .then((result) => {
          console.log(`${hostname} = ${result.value} vistas`);
        })
        .catch((e) => console.log(e));
    }
  }
};
export default count;
