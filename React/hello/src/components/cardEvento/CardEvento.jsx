import React from "react"
import './cardEvento.css'

const CardEvento = ({titulo, paragrafo, link}) => {
    return (
        <div className="card">
            <h3 class="card__titulo">{titulo}</h3>

            <p className="card__paragrafo">
               {paragrafo}
            </p>

            <a href="" className="card__link">{link}</a>
        </div>
    );
}

export default CardEvento