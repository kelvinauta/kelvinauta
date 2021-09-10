import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";
import { Box, Grid } from "theme-ui";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import BlockContent from "@sanity/block-content-to-react";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children
    );
  }

  if (style === "blockquote") {
    return <blockquote>- {props.children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    block(props) {
      // if (props.node.listItem == "bullet") {
      //   return <Styled.li>{props.children}</Styled.li>
      // }
      switch (props.node.style) {
        case "h1":
          return <div>asdfmkl</div>;
        case "h2":
          return <div>asdfmkl</div>;
        case "h3":
          return <div>asdfmkl</div>;
        case "h4":
          return <div>asdfmkl</div>;
        case "h5":
          return <div>asdfmkl</div>;
        case "h6":
          return <div>asdfmkl</div>;
        case "blockquote":
          return <div>asdfmkl</div>;
        default:
          return <div>asdfmkl</div>;
      }
    },
  },
  marks: {
    link: ({ children, mark }) => {
      return <div>asdfmkl</div>;
    },
  },
};
const highlight = (props) => {
  return (
    <span style={{ backgroundColor: props.mark.color }}>{props.children}</span>
  );
};

const HistoriaTemplate = ({ data }) => {
  const item = data.sanityHistorias;

  item.contenido.map((i) => {
    i.markDefs = [];
    return i;
  });
  return (
    <Layout>
      <SEO title={item.title} keywords={[`gatsby`, `application`, `react`]} />
      <article style={{ color: "#d2d2d2" }}>
        <Grid className="cards-grid" gap={2} columns={[2, "2fr 2fr"]}>
          <Box>
            <GatsbyImage
              style={{ borderRadius: 16 }}
              image={item.banner.asset.gatsbyImageData}
            />
          </Box>
          <Box bg="muted">
            <span style={{ fontSize: 24, color: "#fff", fontWeight: 900 }}>
              {item.title}{" "}
            </span>

            <br />
            <p>{item.description}</p>
            <p>
              <BlockContent
                blocks={item.contenido}
                serializers={{ marks: { highlight } }}
              />
            </p>
          </Box>
        </Grid>
      </article>
    </Layout>
  );
};

HistoriaTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HistoriaTemplate;

export const query = graphql`
  query Historia($slug: String) {
    sanityHistorias(slug: { eq: $slug }) {
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
`;
