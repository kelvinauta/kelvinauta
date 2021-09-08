import { faArrowAltCircleRight, faMusic, faPauseCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import useSound from "use-sound";
import test from '../assets/audio.mp3';

const MusicIcon = () => {
    const [play, { stop, isPlaying }] = useSound(test);

    const [isChecked, setIsChecked] = React.useState(
        false
      );

    const Play=()=>{
        setIsChecked(true)
        play()
    }

    const Stop=()=>{
        setIsChecked(false)
        stop()
    }

    useEffect(() => {
        // do nothing on “mount”
      
        // return cleanup function
        return () => {
          stop()
        }
      }, [])
    
    return <div className="cajaf">
        
        <a href="#" className="btn_roundf" title="Imprimir" alt="impirmir"><FontAwesomeIcon spin={isChecked} color="white" icon={faMusic} size="1x" /></a>
        <a className="caja1" target="_blank" href="https://www.youtube.com/watch?v=rha1o1OnnBc&t=21s" alt="No funciona en burros" title="No funciona en burros">
        {isChecked ? <FontAwesomeIcon onClick={()=>Stop()} color="white" icon={faPauseCircle} size="2x" /> :  <FontAwesomeIcon href="https://www.youtube.com/watch?v=rha1o1OnnBc&t=21s" target="_blank" color="white" icon={faPlayCircle} size="2x" />}
       
        </a>
       {/*  <a className="caja2" href="#" alt="comprobante" title="Comprobante"> <FontAwesomeIcon color="white" icon={faPlayCircle} size="2x" /></a> */}
    </div>
}

export default MusicIcon