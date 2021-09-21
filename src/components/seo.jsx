import React from "react";
// import PropTypes from "prop-types"
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};
// const detailsQuery = graphql`
//   query DefaultSEOQuery {
//     allSanitySiteSettings {
//       nodes {
//         title
//         enlaces {
//           discord
//           facebook
//           instagram
//           spotify
//           tiktok
//           youtube
//         }
//         contacto {
//           celular
//           email
//         }
//       }
//     }
//   }
// `;

// const SEO = ({ description, lang, meta, keywords, title }) {
//   return (
//     <StaticQuery
//       query={detailsQuery}
//       render={(data) => {
//         const metaDescription =
//           description || data.allSanitySiteSettings.nodes[0].title;
//         return (
//           <Helmet
//             htmlAttributes={{
//               lang,
//             }}
//             title={title}
//             titleTemplate={`%s | ${data.allSanitySiteSettings.nodes[0].title}`}
//             meta={[
//               {
//                 name: `description`,
//                 content: metaDescription,
//               },
//               {
//                 property: `og:title`,
//                 content: title,
//               },
//               {
//                 property: `og:description`,
//                 content: metaDescription,
//               },
//               {
//                 property: `og:type`,
//                 content: `website`,
//               },
//               {
//                 name: `twitter:card`,
//                 content: `summary`,
//               },
//               {
//                 name: `twitter:creator`,
//                 content: data.allSanitySiteSettings.nodes[0].title,
//               },
//               {
//                 name: `twitter:title`,
//                 content: title,
//               },
//               {
//                 name: `twitter:description`,
//                 content: metaDescription,
//               },
//             ]
//               .concat(
//                 keywords.length > 0
//                   ? {
//                       name: `keywords`,
//                       content: keywords.join(`, `),
//                     }
//                   : []
//               )
//               .concat(meta)}
//           />
//         );
//       }}
//     />
//   );
// }

// SEO.defaultProps = {
//   lang: `es`,
//   meta: [],
//   keywords: [],
// };

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired,
// }

export default SEO;
