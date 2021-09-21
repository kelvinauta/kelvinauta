import Layout from "../components/layout";
import React from "react";
// import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Grid } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/seo";
import CountApi from "../components/CountApi";

const Historias = ({ data }) => {
  const historias = data.allSanityHistorias.nodes;
  return (
    <Layout>
      <SEO title="Historias" keywords={[`gatsby`, `application`, `react`]} />
      <article>
        <Grid
          className="cards-grid"
          sx={{
            maxWidth: "1200px !important",
          }}
          gap={2}
          columns={[2, 2]}
        >
          {historias.map((item, index) => {
            return (
              <Link
                key={index}
                style={{ textDecoration: "none" }}
                to={`/historia/${item.slug}`}
              >
                <Box
                  style={{
                    backgroundColor: "#1f1f1f",
                    padding: "24px",
                    borderRadius: 16,
                  }}
                  className="card-cancion"
                  key={index}
                >
                  <Grid gap={2} columns={[2, "1fr"]} className="cards-grid">
                    <GatsbyImage
                      alt={item.title}
                      style={{ borderRadius: 16 }}
                      image={item.banner.asset.gatsbyImageData}
                    />
                    <div>
                      <span
                        style={{ fontSize: 24, color: "#fff", fontWeight: 900 }}
                      >
                        {item.title}{" "}
                      </span>
                      <span className="description">{item.description}</span>

                      <p
                        style={{
                          textAlign: "right",
                          color: "white",
                          marginTop: 8,
                        }}
                      >
                        Leer mas{" "}
                        <FontAwesomeIcon
                          color="white"
                          style={{ paddingLeft: "8px", fontSize: "20px" }}
                          icon={faArrowAltCircleRight}
                          size="1x"
                        />{" "}
                      </p>
                    </div>
                  </Grid>
                </Box>
              </Link>
            );
          })}
        </Grid>
      </article>
      <CountApi slug="historias" />
    </Layout>
  );
};

// Historias.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Historias;

export const query = graphql`
  query Historias {
    allSanityHistorias {
      nodes {
        description
        title
        slug
        banner {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
