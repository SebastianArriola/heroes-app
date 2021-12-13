import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../selectors/getHeroesByName';
import queryString from 'query-string';

export const SearchScreen = () => {

    const navigate = useNavigate();

    const location =  useLocation();

    const {q} = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({

        searchText: q || ''

    });    

    const { searchText } = values;

    const heroesByName = useMemo(() => getHeroesByName(q), [q]) || [];

    const handleSearch = (e) => {

        e.preventDefault();

        navigate(`?q=${searchText}`)

    }

    

    return (
        <div>
            <h1>Buscar</h1>
            <hr />

            <form onSubmit={handleSearch}>

                <input type="text" placeholder='Buscar heroe...' name="searchText" value={searchText} onChange={handleInputChange} />
                <button type="submit" className='btn btn-outline-primary mt-1'>Buscar</button>

            </form>
            {(q==='' || searchText === '') ? <div className="alert alert-info">Ingrese un heroe</div> : (heroesByName.length === 0 && q!==undefined) && <div className="alert alert-danger">No se encontro ningun heroe con el nombre {q} </div>}
            <div className='container'>
                <h4>Resultados</h4>
                <hr/>
                {heroesByName.map((h) =>(

                    
                    <HeroCard key={h.id}
                    {...h}
                    />


                ))}

            </div>


        </div>
    )
}
