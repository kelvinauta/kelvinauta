import Layout from "../components/layout"
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryEmpty, faCogs, faTruckMonster } from "@fortawesome/free-solid-svg-icons";
import { Box, Flex } from "theme-ui";
import SEO from "../components/seo";


const Biografía = ({ data }) => {
  let dataBio = data.allSanityBiografy.nodes[0].epocas;
  dataBio.reverse()
  return <Layout>
       <SEO title="Biografia" keywords={[`gatsby`, `application`, `react`]} />
    <Box className="conta">


      <div class="timeline">
        <ul>

          {
            dataBio.map(item => {
              return <>

                   { item.eventos.map(itema => {
                      return <li>
                      <div class="timeline-content">
                        <h3 class="date">{item.year} - {itema.date}</h3>
                       
                            
                              <p>{itema.texto} </p>
                         
                        
      
                      </div>
                    </li>
                    })}
                  </>

            })
          }

        </ul>
      </div>
    </Box>

  </Layout>
}


Biografía.propTypes = {
  children: PropTypes.node.isRequired
};

export default Biografía;



export const query = graphql`
{
  allSanityBiografy {
    nodes {
      epocas {
        eventos {
          texto
          date(locale: "")
        }
        year
      }
    }
  }
    
}
`;