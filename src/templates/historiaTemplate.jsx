
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import SEO from "../components/seo";
import { Box, Grid } from "theme-ui";
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';


const HistoriaTemplate = ({ data }) => {
  const item=data.sanityHistorias;
  return <Layout>
    <SEO title={item.title} keywords={[`gatsby`, `application`, `react`]} />
  <article style={{color:"#d2d2d2"}}>

    <Grid  className="cards-grid" gap={2} columns={[2, '2fr 2fr']}>
  <Box>
  <GatsbyImage style={{borderRadius:16}} image={item.banner.asset.gatsbyImageData} />
  </Box>
  <Box bg="muted">
  <span style={{fontSize:24,color:"#fff",fontWeight:900}}>{item.title} </span>
 
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


HistoriaTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default HistoriaTemplate;



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