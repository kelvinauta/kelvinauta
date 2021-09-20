import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "../assets/layout.css";

import Header from "./header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "theme-ui";

import MusicIcon from "./music_float";
library.add(fab, faCheckSquare, faCoffee, faBars);
const Layout = ({ children }) => (
  <StaticQuery
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
    render={(data) => {
      const datos = data.allSanitySiteSettings.nodes[0];

      return (
        <div>
          <Header data={data.allSanitySiteSettings.nodes[0]} />
          <div className="container-main">
            <main>
              <div
                style={{
                  margin: `0 auto`,
                  maxWidth: 1200,
                  padding: `0px 1.0875rem 1.45rem`,
                  paddingTop: 0,
                }}
              >
                {children}
              </div>
            </main>
            <footer>
              <div className="container_footer">
                <div className="separador"></div>
                <br />
                <div className="container-footer">
                  <div>
                    © {datos.title} {new Date().getFullYear()}. All rights
                    reserved. Designed & Developed by
                  </div>
                  <Flex className="redes-sociales">
                    <a
                      className="espacios"
                      target="_blank"
                      href={datos.enlaces[0].facebook}
                    >
                      <FontAwesomeIcon
                        icon={["fab", "facebook-square"]}
                        size="1x"
                        style={{ color: "#fff", fontSize: 20 }}
                      />
                    </a>

                    <a
                      className="espacios"
                      target="_blank"
                      href={datos.enlaces[0].instagram}
                    >
                      <FontAwesomeIcon
                        icon={["fab", "instagram"]}
                        size="1x"
                        style={{ color: "#fff", fontSize: 20 }}
                      />
                    </a>

                    <a
                      className="espacios"
                      target="_blank"
                      href={datos.enlaces[0].tiktok}
                    >
                      <FontAwesomeIcon
                        icon={["fab", "tiktok"]}
                        size="1x"
                        style={{ color: "#fff", fontSize: 20 }}
                      />
                    </a>

                    <a
                      className="espacios"
                      target="_blank"
                      href={datos.enlaces[0].discord}
                    >
                      <FontAwesomeIcon
                        icon={["fab", "discord"]}
                        size="1x"
                        style={{ color: "#fff", fontSize: 20 }}
                      />
                    </a>
                    <a
                      className="espacios"
                      target="_blank"
                      href={datos.enlaces[0].youtube}
                    >
                      <FontAwesomeIcon
                        icon={["fab", "youtube"]}
                        size="1x"
                        style={{ color: "#fff", fontSize: 20 }}
                      />
                    </a>
                  </Flex>
                </div>
              </div>
            </footer>
            <MusicIcon />
          </div>
        </div>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
