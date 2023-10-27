import React from "react";
import './Title.css'

function Title(props) {
    return(
        <h1 className="title">Hello {props.nome} {props.sobrenome}</h1>
    );
}

export default Title