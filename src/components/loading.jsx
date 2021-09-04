

import React from "react";
import PropTypes from 'prop-types';
import "../assets/inicio.scss"
const LoadingIncio = ({}) => {

    return <div className="content-inicio">
        <section className="inicio">
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
            <div class="c4"></div>
        </section>
        <section className="inicio title-loading">
            <h1>Kelvinauta</h1>
        </section>

    </div>
}


LoadingIncio.propTypes = {
    children: PropTypes.node.isRequired
};

export default LoadingIncio;