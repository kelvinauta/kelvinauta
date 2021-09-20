import Layout from "../components/layout";
import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import SEO from "../components/seo";
import { Box, Grid } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import CountApi from "../components/CountApi";

const Canciones = ({ data }) => {
  const canciones = data.allSanityCanciones.nodes;
  return (
    <Layout>
      <SEO title="Canciones" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <Grid
          className="cards-grid"
          sx={{
            maxWidth: "1200px !important",
          }}
          gap={2}
          columns={[2, 3]}
        >
          {canciones.map((item, index) => {
            return (
              <Link
                key={index}
                style={{ textDecoration: "none" }}
                to={`/cancion/${item.slug}`}
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
                  <iframe
                    width="100%"
                    height="250px"
                    src={item.enlace[0].youtube}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  <span
                    style={{ fontSize: 24, color: "#fff", fontWeight: 900 }}
                  >
                    {item.title}{" "}
                  </span>

                  <p
                    style={{
                      textAlign: "right",
                      color: "white !important",
                      marginTop: 8,
                    }}
                  >
                    Leer mas{" "}
                    <FontAwesomeIcon
                      color="white"
                      style={{ paddingLeft: "8px", fontSize: "24px" }}
                      icon={faArrowAltCircleRight}
                      size="1x"
                    />{" "}
                  </p>
                </Box>
              </Link>
            );
          })}
        </Grid>
      </div>
      <CountApi slug="canciones" />
    </Layout>
  );
};

// Canciones.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Canciones;

export const query = graphql`
  {
    allSanityCanciones {
      nodes {
        id
        slug
        lore
        title
        tiktoks
        enlace {
          spotify
          youtube
        }
      }
    }
  }
`;
