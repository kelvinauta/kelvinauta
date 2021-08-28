import Layout from "../components/layout"
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import SEO from "../components/seo";
import { Box, Grid } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";


const Canciones = ({ data }) => {
  const canciones = data.allSanityCanciones.nodes;
  return <Layout>
    <SEO title="Canciones" keywords={[`gatsby`, `application`, `react`]} />
    <div>

      <Grid sx={{
        maxWidth: "1200px !important"
      }} gap={2} columns={[2, 3]}>

        {
          canciones.map((item, index) => {
            return <Link style={{textDecoration:"none"}} to={`/cancion/${item.slug}`}>
              <Box className="card-cancion" key={index}>
                <iframe width="100%" height="250px" src={item.enlace[0].youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            
                <h3>{item.title} </h3>
                <p>Letra y mas <FontAwesomeIcon color="black" style={{paddingLeft:"8px",fontSize:"20px"}} icon={faArrowAltCircleRight} size="1x" /> </p>
              </Box>
            </Link>
          })
        }

      </Grid>
    </div>
  </Layout>
}


Canciones.propTypes = {
  children: PropTypes.node.isRequired
};

export default Canciones;


export const query = graphql`
  {
    allSanityCanciones {
      nodes {
        id
        slug
        letra
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