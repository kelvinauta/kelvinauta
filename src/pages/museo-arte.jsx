import Layout from "../components/layout"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Grid } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from 'react-vanilla-tilt'
import { faArrowAltCircleRight, faPauseCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/seo";


const MuseoArte = ({ data }) => {
    const historias = data.allSanityHistorias.nodes;
    const [isChecked,setIsChacked] = useState(false)

    useEffect(()=>{
      
    })
    return <Layout>
        <SEO title="Historias" keywords={[`gatsby`, `application`, `react`]} />
        <article>
            <Grid className="cards-grid" sx={{
                maxWidth: "1200px !important"
            }} gap={2} columns={[2, 4]}>
              <Title className="title-card" options={{ scale: 2, max: 25,speed:400 }}>
  

                <div className="card" >
                    <img className="imagen-fondo" src="fondo.jpg" alt="imagen test" />
                    <div className="content">
                        <h2>01</h2>
                        <h3>Card one</h3>
                        <p>
                            kasjdhfvkbal diogabuvsuhyldjbaLUIJKBSKaghsvñoiAS
                            ablsjhvAJCSVCUklniguof8it7jbkoiñnhsduioay
                        </p>
                        <a class="" target="_blank" href="https://www.youtube.com/watch?v=rha1o1OnnBc&t=21s" alt="No funciona en burros" title="No funciona en burros">
                            {isChecked ? <FontAwesomeIcon onClick={() => {}} color="white" icon={faPauseCircle} size="2x" /> : <FontAwesomeIcon href="https://www.youtube.com/watch?v=rha1o1OnnBc&t=21s" target="_blank" color="white" icon={faPlayCircle} size="2x" />}

                        </a>
                    </div>
                </div>
                </Title>
                <Title className="title-card" options={{ scale: 2, max: 25,speed:400 }}>
  

  <div className="card" >
      <img className="imagen-fondo" src="fondo.jpg" alt="imagen test" />
      <div className="content">
          <h2>01</h2>
          <h3>Card one</h3>
          <p>
              kasjdhfvkbal diogabuvsuhyldjbaLUIJKBSKaghsvñoiAS
              ablsjhvAJCSVCUklniguof8it7jbkoiñnhsduioay
          </p>
          <a class="" target="_blank" href="https://www.youtube.com/watch?v=rha1o1OnnBc&t=21s" alt="No funciona en burros" title="No funciona en burros">
              {isChecked ? <FontAwesomeIcon onClick={() => {}} color="white" icon={faPauseCircle} size="2x" /> : <FontAwesomeIcon href="https://www.youtube.com/watch?v=rha1o1OnnBc&t=21s" target="_blank" color="white" icon={faPlayCircle} size="2x" />}

          </a>
      </div>
  </div>
  </Title>
            </Grid>

        </article>
    </Layout>
}


MuseoArte.propTypes = {
    children: PropTypes.node.isRequired
};

export default MuseoArte;


export const query = graphql`
{
  allSanityHistorias {
    nodes {
      body
      description
      title
      slug
      banner {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
    
}
`;

