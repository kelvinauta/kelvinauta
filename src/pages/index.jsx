import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Grid,Button, Flex, Heading, ThemeProvider } from "theme-ui";

import Layout from "../components/layout";
import LoadingIncio from "../components/loading";
import MusicIcon from "../components/music_float";
import Seo from '../components/seo';
import theme from "../gatsby-plugin-theme-ui";
import Canciones from "./canciones";

const Index = ({ data }) => {
  const [inicio, setInicio] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInicio(true)
    }, 1500);
  })
  const datos = data.allSanitySiteSettings.nodes[0];
  const canciones = data.allSanityCanciones.nodes;
  const historias = data.allSanityHistorias.nodes;
  return (
    <>
      {
        inicio === false && <LoadingIncio />
      }
      {
        inicio === true &&
        <ThemeProvider theme={theme}>

          <Layout>
            <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />

            <Flex
              sx={{
                alignItems: 'center',
              }}>
              <div className="content-imagen" style={{ backgroundImage: "url(../fondo.png)" }}>
                <div className="datos">
                  <Flex className="redes-sociale">
                    <a className="" target="_blank" href={datos.enlaces[0].facebook}>
                      <FontAwesomeIcon icon={["fab", "facebook-square"]} size="1x" style={{ color: "#fff", fontSize: 24 }} />
                    </a>

                    <a className="" target="_blank" href={datos.enlaces[0].instagram}>
                      <FontAwesomeIcon icon={["fab", "instagram"]} datos="1x" style={{ color: "#fff", fontSize: 24 }} />
                    </a>

                    <a className="" target="_blank" href={datos.enlaces[0].tiktok}>
                      <FontAwesomeIcon icon={["fab", "tiktok"]} size="1x" style={{ color: "#fff", fontSize: 24 }} />
                    </a>

                    <a className="" target="_blank" href={datos.enlaces[0].discord}>
                      <FontAwesomeIcon icon={["fab", "discord"]} size="1x" style={{ color: "#fff", fontSize: 24 }} />
                    </a>
                    <a className="" target="_blank" href={datos.enlaces[0].youtube}>
                      <FontAwesomeIcon icon={["fab", "youtube"]} size="1x" style={{ color: "#fff", fontSize: 24 }} />
                    </a>

                  </Flex>
                  <div className="quien-soy">
                    <h2>Hola, yo soy</h2>
                    <h1>Kleber Rivamontan</h1>
                    <p className="texto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className="imagen-p">
                  <img className="imagen_principal" src={`../Klebber.png`} alt="fondo" />

                </div>


              </div>

            </Flex>


            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: 'space-between',
                padding: 0
              }}
            >

            </ul>
            <br/>
            <h2 style={{color:"white",fontSize:"2.5em"}} >Canciones</h2>
            <Grid className="cards-grid" sx={{
        maxWidth: "1200px !important",padding:"24px 0"
      }} gap={2} columns={[2, 3]}>
       
        {
          canciones.map((item, index) => {
            return <Link style={{textDecoration:"none"}} to={`/cancion/${item.slug}`}>
                 <Box style={{backgroundColor:"#1f1f1f",padding:"24px",borderRadius:16}} className="card-cancion" key={index}>
                <iframe width="100%" height="250px" src={item.enlace[0].youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <span style={{fontSize:24,color:"#fff",fontWeight:900}}>{item.title} </span>
              
                <p style={{textAlign:"right",color:"white !important",marginTop:8}}>Leer mas <FontAwesomeIcon color="white" style={{paddingLeft:"8px",fontSize:"24px"}} icon={faArrowAltCircleRight} size="1x" /> </p>
              </Box>
            </Link>
          })
        }

      </Grid>
      <br/>
            <h2 style={{color:"white",fontSize:"2.5em"}} >Biografía</h2>
            <article>
            <Grid className="cards-grid" sx={{
        maxWidth: "1200px !important",padding:"24px 0"
      }} gap={2} columns={[2, 3]}>

        {
          historias.map((item, index) => {
            return <Link style={{textDecoration:"none"}} to={`/historia/${item.slug}`}>
              <Box style={{backgroundColor:"#1f1f1f",padding:"24px",borderRadius:16}} className="card-cancion" key={index}>
              <Grid gap={2} columns={[2, '1fr']} className="cards-grid">
               <GatsbyImage style={{borderRadius:16}} image={item.banner.asset.gatsbyImageData} />
               <div>
                <span style={{fontSize:24,color:"#fff",fontWeight:900}}>{item.title} </span>
                <span className="description">
                  {item.description}
                </span>
               
                <p style={{textAlign:"right",color:"white",marginTop:8}}>Leer mas <FontAwesomeIcon color="white" style={{paddingLeft:"8px",fontSize:"20px"}} icon={faArrowAltCircleRight} size="1x" /> </p>
               </div>

        </Grid>

            
              
              </Box>
            </Link>
          })
        }

      </Grid>
    
    </article>
          
         
          </Layout>
        </ThemeProvider>
      }
    </>
  );

}
export default Index;


export const query = graphql`
{
  allSanitySiteSettings {
    nodes {
      title
      enlaces {
        discord
        facebook
        instagram
        spotify
        tiktok
        youtube
      }
      contacto {
        celular
        email
      }
    }
  }
  allSanityCanciones {
    nodes {
      id
      slug
      letra
      lore
      title
      tiktoks
      enlace {
        spotify
        youtube
      }
    }
  }

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