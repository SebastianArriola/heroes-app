import React from 'react'
import { Link } from 'react-router-dom'


export const HeroCard = ({ id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const cargarImagen = require.context("../../assets", true);

    return (
        <div className="card" style={{ width: 18 + 'rem' }}>
            <img src={cargarImagen(`./${id}.jpg`)} alt={superhero} />
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                <p className="card-text text-muted">{first_appearance}</p>
                {alter_ego !== characters && <p className="card-text">{characters}</p>}
                <Link to={`/hero/${id}`}>

                    Ver más...

                </Link>
                </div>
        </div>
    )
}
