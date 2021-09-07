
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import SEO from "../components/seo";
import { Box, Grid } from "theme-ui";
import Layout from '../components/layout';


const CancionTemplate = ({ data }) => {
  const item=data.sanityCanciones;
  return <Layout>
    <SEO title={item.title} keywords={[`gatsby`, `application`, `react`]} />
  
    <Grid  className="cards-grid" gap={2} columns={[2, '2fr 2fr']}>
  <Box>
<iframe width="100%" height="250px" src={item.enlace[0].youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<span style={{fontSize:24,color:"#fff",fontWeight:900}}>{item.title} </span>
            
          <br/>
  
  <h4 style={{color:'#3b1b85',backgroundColor:'#d2d2d2', width:"75px",padding:"8px",borderRadius:16,textAlign:"center"}}>Letra</h4>
  
          <br/>
  <span>
    {item.letra}
  </span>
  </Box>
  <Box bg="muted">

  <h4 style={{color:'#3b1b85',backgroundColor:'#d2d2d2', width:"75px",padding:"8px",borderRadius:16,textAlign:"center"}}>Tiktoks</h4>
  <br/>
  <h4 style={{color:'#3b1b85',backgroundColor:'#d2d2d2', width:"75px",padding:"8px",borderRadius:16,textAlign:"center"}}>Lore</h4>
  </Box>
  
</Grid>
   </Layout>
}


CancionTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default CancionTemplate;

export const query = graphql`
query Cancion($slug: String) {
    sanityCanciones(slug: {eq: $slug}) {
      id
      lore
      tiktoks
      title
      slug
      enlace {
        spotify
        youtube
      }
  
    }
  }  
`