import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Button, Flex, Heading, ThemeProvider } from "theme-ui";
import Layout from "../components/layout";
import Seo from '../components/seo';
import theme from "../gatsby-plugin-theme-ui";
const Index = ({ data }) => {
  return <StaticQuery
    query={graphql`
    query MyQuery {
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
      }
    `}
    render={data => {
      const datos = data.allSanitySiteSettings.nodes[0];
      return (
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
                      <FontAwesomeIcon icon={["fab", "facebook-square"]} size="1x" style={{ color: "#fff", fontSize: 36 }} />
                    </a>

                    <a className="" target="_blank" href={datos.enlaces[0].instagram}>
                      <FontAwesomeIcon icon={["fab", "instagram"]} datos="1x" style={{ color: "#fff", fontSize: 36 }} />
                    </a>

                    <a className="" target="_blank" href={datos.enlaces[0].tiktok}>
                      <FontAwesomeIcon icon={["fab", "tiktok"]} size="1x" style={{ color: "#fff", fontSize: 36 }} />
                    </a>

                    <a className="" target="_blank" href={datos.enlaces[0].discord}>
                      <FontAwesomeIcon icon={["fab", "discord"]} size="1x" style={{ color: "#fff", fontSize: 36 }} />
                    </a>
                    <a className="" target="_blank" href={datos.enlaces[0].youtube}>
                      <FontAwesomeIcon icon={["fab", "youtube"]} size="1x" style={{ color: "#fff", fontSize: 36 }} />
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
          </Layout>
        </ThemeProvider>
      );
    }} />
}
export default Index;

