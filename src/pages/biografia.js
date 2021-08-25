import Layout from "../components/layout"
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';


const Biografía = ({ data }) => {
    return <Layout>

<div>Biografía</div>
    </Layout>
}


Biografía.propTypes = {
    children: PropTypes.node.isRequired
  };
  
  export default Biografía;


  
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