import { faAtom, faCoffee } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex, NavLink } from "theme-ui"




const Header = ({ data }) => {
    const url = typeof window !== 'undefined' ? window.location.pathname : '';
    console.log(url)
    return <div className="container-header">
        <header>

            <Flex className="logo">
                <a href="/">
                    Logo
                    <img />
                </a>
            </Flex>
            <div className="container-menu">

            <Flex as="nav">
                <NavLink className={url==="/canciones"?"hover":""} href="canciones" p={2}>
                    Canciones
                </NavLink>
                <NavLink className={url==="/historias"?"hover":""} href="historias" p={2}>
                    Historias
                </NavLink>
                <NavLink className={url==="/biografia"?"hover":""} href="biografia" p={2}>
                    Biografía
                </NavLink>
            </Flex>
               <Flex className="redes-sociales">
               <a className="espacios" target="_blank" href={data.enlaces[0].facebook}>
                    <FontAwesomeIcon icon={["fab", "facebook-square"]} size="1x" style={{ color: "#000000" }} />
                </a>
                   
               <a className="espacios" target="_blank" href={data.enlaces[0].instagram}>
                    <FontAwesomeIcon icon={["fab", "instagram"]} size="1x" style={{ color: "#000000" }} />
                </a>
                   
               <a className="espacios" target="_blank" href={data.enlaces[0].tiktok}>
                    <FontAwesomeIcon icon={["fab", "tiktok"]} size="1x" style={{ color: "#000000" }} />
                </a>
                   
               <a className="espacios" target="_blank" href={data.enlaces[0].discord}>
                    <FontAwesomeIcon icon={["fab", "discord"]} size="1x" style={{ color: "#000000" }} />
                </a>
               <a className="espacios" target="_blank" href={data.enlaces[0].youtube}>
                    <FontAwesomeIcon icon={["fab", "youtube"]} size="1x" style={{ color: "#000000" }} />
                </a>

               </Flex>
             
            </div>
        </header>
       
    </div>
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
