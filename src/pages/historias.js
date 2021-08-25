import Layout from "../components/layout"
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';


const Historias = ({ data }) => {
    return <Layout>

<div>Canciones</div>
    </Layout>
}


Historias.propTypes = {
    children: PropTypes.node.isRequired
  };
  
  export default Historias;

  
export const query = graphql`
{
    allSanityHistorias {
        nodes {
          body
          description
          title
        }
      }
    
}
`;

  