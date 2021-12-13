import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroeById } from '../selectors/getHeroeById';

export const HeroScreen = () => {

    const { heroId } = useParams();

    const hero = useMemo(() => getHeroeById(heroId), [heroId]);

    const navigate = useNavigate();

    const handleReturn = () =>{

        navigate(-1);

    }

    if (hero === undefined) {

        return <Navigate to="/" />

    }

    const { id,
        superhero,
        publisher,
        characters,
        alter_ego,
        first_appearance } = hero;

    const cargarImagen = require.context("../../assets", true);

    return (
        <div className="row mt-5 animate__animated animate__fadeInBottomLeft">

            <div className="col-4">
                <img src={cargarImagen(`./${id}.jpg`)}
                alt={superhero}
                className="img-thumbnail"/>
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group">

                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>

                </ul>

                <h3 className="mt-3">Characters</h3>
                <p>{characters}</p>

                <button onClick={handleReturn} className="btn btn-outline-info">Regresar</button>

            </div>

        </div>
    )
}
