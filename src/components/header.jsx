// ** @jsx jsx *
import {
  faAtom,
  faCoffee,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
import { jsx, Flex, NavLink } from "theme-ui";

const Header = ({ data }) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="container-header">
      <header>
        <div className="container__nav" sx={{ borderRadius: 2 }}>
          <Flex className="logo">
            <Link
              style={{
                textDecoration: "none",
                fontSize: 24,
                color: "white",
                fontWeight: 900,
              }}
              className="normal"
              to="/"
            >
              KELVINAUTA
              <div
                className={url === "/" ? "hover mostrar" : "normal mostrar"}
              ></div>
            </Link>

            <label htmlFor="menu" className="nav_label">
              <FontAwesomeIcon
                className="nav__img"
                color="white"
                style={{ paddingLeft: "8px", fontSize: "32px" }}
                icon={"bars"}
                size="2x"
              />
            </label>
          </Flex>
          <input type="checkbox" id="menu" className="checkmenu" />
          <div className="container-menu">
            <Flex as="nav">
              <Link className="normal" to="/canciones">
                CANCIONES
                <div
                  className={
                    url === "/canciones" ? "hover mostrar" : "normal mostrar"
                  }
                ></div>
              </Link>

              <Link className="normal" to="/historias">
                HISTORIAS
                <div
                  className={
                    url === "/historias" ? "hover mostrar" : "normal mostrar"
                  }
                ></div>
              </Link>
              <Link className="normal" to="/biografia">
                BIOGRAF??A
                <div
                  className={
                    url === "/biografia" ? "hover mostrar" : "normal mostrar"
                  }
                ></div>
              </Link>
              <Link className="normal" to="/museo-arte">
                MUSEO DE ARTE
                <div
                  className={
                    url === "/museo-arte" ? "hover mostrar" : "normal mostrar"
                  }
                ></div>
              </Link>
            </Flex>
          </div>
        </div>
      </header>
    </div>
  );
};

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: ``,
// };

export default Header;
