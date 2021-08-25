import Layout from "../components/layout"
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import SEO from "../components/seo";
import { Box, Grid } from "theme-ui";


const Canciones = ({ data }) => {
    return <Layout>
        <SEO title="Canciones" keywords={[`gatsby`, `application`, `react`]} />
        <div>
            {JSON.stringify(data)}
            <Grid sx={{
                maxWidth: "1200px !important"
            }} gap={2} columns={[2, 3]}>
                <Box>
                    <video src=""></video>
                </Box>
                <Box bg="muted">Box</Box>
                <Box bg="primary">Box</Box>
                <Box bg="muted">Box</Box>
                <Box bg="muted">Box</Box>
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
          letra
          lore
          tiktoks
          title
          enlace {
            spotify
            youtube
          }
        }
      }
      
  }
`;