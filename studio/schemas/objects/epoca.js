export default {
  name: "epoca",
  title: "Eventos",
  type: "object",
  fields: [
    {
      name: "year",
      type: "number",
      title: "Año",
    },
    {
      title: "Eventos",
      name: "eventos",
      type: "array",
      of: [{ type: "evento" }],
    },
  ],
};
