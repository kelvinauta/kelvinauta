import Layout from "../components/layout"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Grid } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blocksToHtml from '@sanity/block-content-to-html'
import Title from 'react-vanilla-tilt'
import { faArrowAltCircleRight, faPauseCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/seo";
const BlockContent = require('@sanity/block-content-to-react')


const MuseoArte = ({ data }) => {
    const artes = data.allSanityMuseoarte.nodes;
    const [isChecked, setIsChacked] = useState(false)
    const [autoplay, setAutoplay] = useState(0)

    useEffect(() => {

    })
    const h = blocksToHtml.h

    const serializers = {
        types: {
            code: props => (
                h('pre', { className: ""},
                    h('code', "dfd")
                )
            )
        }
    }

    const Play = (index, url) => {
        console.log(index, url)
        let iframe = document.getElementById(`${index}`)
        iframe.src = `${url}&&autoplay=1`

    }
    return <Layout>
        <SEO title="Historias" keywords={[`gatsby`, `application`, `react`]} />
        <article>
            <Grid className="class-grid" sx={{
                maxWidth: "1200px !important"
            }} gap={2} columns={[2, 4]}>
                {
                    artes.map((item, index) => {
                        return <Title className="title-card" options={{ scale: 2, max: 25, speed: 400 }}>


                            <div className="card" >
                                <img className="imagen-fondo" src={item.imagen.asset.url} alt="imagen test" />
                                <div className="content">
                                    <h2>{index + 1}</h2>
                                    <h3>{item.title}</h3>
                                    <p>
                                        {item.descripcion}
                                        
                                       
                                    </p>
                                    <iframe id={item.id} key={index} style={{ opacity: 0 }} width="0" height="0" src={item.musica} title={item.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div style={{ cursor: "pointer" }}>
                                        {isChecked ? <FontAwesomeIcon onClick={() => { }} color="white" icon={faPauseCircle} size="2x" /> : <FontAwesomeIcon onClick={() => Play(item.id, item.musica)} color="white" icon={faPlayCircle} size="2x" />}

                                    </div>
                                </div>
                            </div>
                        </Title>

                    })
                }

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
    allSanityMuseoarte {
        nodes {
            id
          colabaracion
          descripcion
          musica
          title
          contenido {
            children {
                marks
                text
                _key
                _type
              }
              style
          }
          imagen {
            asset {
              url
            }
          }
        }
      }
    
}
`;

