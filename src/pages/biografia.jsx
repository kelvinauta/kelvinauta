import Layout from "../components/layout"
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryEmpty, faCogs, faTruckMonster } from "@fortawesome/free-solid-svg-icons";
import { Box, Flex } from "theme-ui";


const Biografía = ({ data }) => {
    return <Layout>
        <Flex>
          <Box>
          <FontAwesomeIcon color="white" style={{paddingLeft:"8px"}} icon={faCogs} size="10x" />
          </Box>
          <Box style={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:32}}>
            <h3>Pagina en desarrollo</h3>
          </Box>
        </Flex>
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