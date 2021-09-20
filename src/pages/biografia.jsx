import Layout from "../components/layout";
import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryEmpty,
  faCogs,
  faTruckMonster,
} from "@fortawesome/free-solid-svg-icons";
import { Box } from "theme-ui";
import SEO from "../components/seo";
import CountApi from "../components/CountApi";

const Biografía = ({ data }) => {
  let dataBio = data.allSanityBiografy.nodes[0].epocas;
  dataBio.reverse();
  return (
    <div
      style={{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",

        zIndex: -1,

        opacity: 0.9,
        backgroundRepeat: "repeat",
        // backgroundImage: "url(../fondo.jpg)",
      }}
    >
      <Layout>
        <SEO title="Biografia" keywords={[`gatsby`, `application`, `react`]} />
        <Box className="conta">
          <div className="timeline">
            <ul>
              {dataBio.map((item, index) => {
                return (
                  <>
                    {item.eventos.map((itema, index) => {
                      return (
                        <li key={index}>
                          <div className="timeline-content">
                            <h3 className="date">
                              {item.year} - {itema.date}
                            </h3>

                            <p>{itema.texto} </p>
                          </div>
                        </li>
                      );
                    })}
                  </>
                );
              })}
            </ul>
          </div>
        </Box>
        <CountApi slug="biografia" />
      </Layout>
    </div>
  );
};

// Biografía.propTypes = {
//   children: PropTypes.node.isRequired
// };

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
