import React, { useState } from "react";
import "animate.css"
import BlockContent from "@sanity/block-content-to-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPauseCircle, faPlayCircle, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player/youtube'
const highlight = (props) => {
    return <span style={{ backgroundColor: props.mark.color }}>{props.children}</span>
}
export const Modal = ({ data, title, estado, imagen, musica, cerrar }) => {

    const [isChecked, setIsChecked] = useState(false)
    const [musicaUrl, setMusicaUrl] = useState(musica)


    const Play=()=>{
        let alterMusica=musica+"&&autoplay=1";
        setMusicaUrl(alterMusica)
        setIsChecked(true)

    }
    const Pause=()=>{
        let alterMusica=musica+"&&autoplay=0";
        setMusicaUrl(alterMusica)
        setIsChecked(false)

    }
 
    return <div className={estado === true ? "mostrarModal" : "ocultarModal"}>
        <div className="modal_content animate__animated animate__fadeInDown">
            <div className="imagen_modal">
                <img className="" src={imagen} alt="imagen test" />
            </div>
            <div className="contenido_modal">
                <h2>{title} </h2>
                <BlockContent
                    // Array of portable text blocks
                    blocks={data}
                    // Custom serializers for marks, blocks
                    serializers={{ marks: { highlight } }}
                />
                <br />
                {
                    musica != null && <>
                     <ReactPlayer
                          width='1px'
                          height='1px'
                        style={{width:"1px",height:"1px",opacity:1}} url={musica}
                        playing={isChecked}
                       
                        />
                 
                    {isChecked ? <FontAwesomeIcon onClick={() => Pause()} color="white" icon={faPauseCircle} size="2x" /> : <FontAwesomeIcon onClick={() => Play()} color="white" icon={faPlayCircle} size="2x" />}
                    </>
                }
              
            </div>
            <FontAwesomeIcon className="icono_modal" onClick={() => {
                 let alterMusica=musica+"&&autoplay=0";
                 setMusicaUrl(alterMusica)
                 setIsChecked(false)
                cerrar()
            }} color="white" icon={faWindowClose} size="2x" />
            <br />
        </div>
    </div>
}