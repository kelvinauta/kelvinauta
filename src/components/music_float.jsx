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
    
    return <div class="cajaf">
        
        <a href="#" class="btn_roundf" title="Imprimir" alt="impirmir"><FontAwesomeIcon spin={isChecked} color="white" icon={faMusic} size="1x" /></a>
        <a class="caja1" href="#" alt="contrato" title="Contrato">
        {isChecked ? <FontAwesomeIcon onClick={()=>Stop()} color="white" icon={faPauseCircle} size="2x" /> :  <FontAwesomeIcon onClick={()=>Play()} color="white" icon={faPlayCircle} size="2x" />}
       
        </a>
       {/*  <a class="caja2" href="#" alt="comprobante" title="Comprobante"> <FontAwesomeIcon color="white" icon={faPlayCircle} size="2x" /></a> */}
    </div>
}

export default MusicIcon