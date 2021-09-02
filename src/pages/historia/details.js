
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import SEO from "../../components/seo";
import { Box, Grid } from "theme-ui";
import Layout from '../../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';


const Details = ({ data }) => {
  const item=data.sanityHistorias;
  return <Layout>
    <SEO title="Canciones" keywords={[`gatsby`, `application`, `react`]} />
  <article style={{color:"#d2d2d2"}}>

    <Grid  className="cards-grid" gap={2} columns={[2, '2fr 2fr']}>
  <Box>
  <GatsbyImage style={{borderRadius:16}} image={item.banner.asset.gatsbyImageData} />
  </Box>
  <Box bg="muted">
  <h3 style={{color:"black"}}>{item.title}</h3> 
  <br/>
  <p>
    {item.description}
  </p>
  <p>
    {item.body}
  </p>
  </Box>
  
</Grid>
  </article>
   </Layout>
}


Details.propTypes = {
  children: PropTypes.node.isRequired
};

export default Details;



export const query = graphql`
query Historia($slug: String) {
    sanityHistorias(slug: {eq: $slug}) {
    body
    description
    slug
    title
    banner {
      asset {
        gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
      }
    }
  }
  }  
`