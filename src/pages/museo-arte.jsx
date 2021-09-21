// ** @jsx jsx *

import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { jsx, Box, Grid } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from "react-vanilla-tilt";
import {
  faArrowAltCircleRight,
  faBook,
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/seo";
import Body from "../components/body";
import BlockContent from "@sanity/block-content-to-react";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import "animate.css";
import { Modal } from "../components/modal";
import CountApi from "../components/CountApi";

const MuseoArte = ({ data }) => {
  const artes = data.allSanityMuseoarte.nodes;
  const [isChecked, setIsChacked] = useState(false);
  const [autoplay, setAutoplay] = useState(0);
  const [estado, setEstado] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [musica, setMusica] = useState(null);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const Play = (index, url) => {
    console.log(index, url);
    let iframe = document.getElementById(`${index}`);
    iframe.src = `${url}&&autoplay=1`;
  };

  const abrirModal = () => {};
  return (
    <Layout>
      <SEO title="Historias" keywords={[`gatsby`, `application`, `react`]} />
      <article>
        <Grid
          className="class-grid"
          sx={{
            justifyItems: "center",
          }}
          gap={2}
          columns={[2, 4]}
        >
          {artes.map((arte, index) => {
            return (
              <Tilt
                key={index}
                // className="title-card"
                options={{ scale: 2, max: 25, speed: 400 }}
                style={{
                  backgroundColor: "tansparent",
                }}
                sx={{
                  cursor: "pointer",
                  // backgroundColor: "secondary",
                  borderRadius: 1,
                  position: "relative",
                  width: 250,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  setDataModal(arte._rawContenido);
                  setImagen(arte.imagen.asset.url);
                  setMusica(arte.musica);
                  setTitle(arte.title);
                  setId(arte.id);
                  setEstado(true);
                }}
              >
                <div
                  // className="card"
                  sx={{}}
                >
                  <img
                    // className="imagen-fondo"
                    sx={{ width: "100%", borderRadius: 1 }}
                    src={arte.imagen.asset.url}
                    alt={arte.title}
                  />
                  {/* <div
                    // className="content"
                    sx={{ position: "absolute" }}
                  >
                    <h3>{arte.title}</h3>
                  </div> */}
                </div>
              </Tilt>
            );
          })}
        </Grid>
        <Modal
          data={dataModal}
          title={title}
          estado={estado}
          imagen={imagen}
          musica={musica}
          id={id}
          cerrar={() => setEstado(false)}
        />
      </article>
      <CountApi slug="museo-arte" />
    </Layout>
  );
};

// MuseoArte.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default MuseoArte;

export const query = graphql`
  query Museo {
    allSanityMuseoarte {
      nodes {
        id
        colabaracion
        musica
        title
        _rawContenido
        contenido {
          _rawChildren(resolveReferences: { maxDepth: 10 })
          _key
          _type
          style
          children {
            text
            marks
            _type
            _key
          }
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
