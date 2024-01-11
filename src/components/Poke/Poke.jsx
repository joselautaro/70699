import React, { useEffect, useState } from 'react'

export const Poke = () => {


    const [pokemon, setPokemon] = useState(null);

    const [id, setId] = useState(1);

    const [busqueda, setBusqueda] = useState('');


    useEffect(() => {
        busquedaById(id)
    }, [id])

    const busquedaById = (pokemonId) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    img: data.sprites.front_default,
                    peso: data.weight
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleAnterior = () => {
        if (id > 1) setId(id - 1);
    }

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleInputChange = (e) => {
        setBusqueda(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (busqueda.length > 2) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
                .then((res) => res.json())
                .then((data) => {
                    setPokemon({
                        nombre: data.name,
                        img: data.sprites.front_default
                    })
                })
            setId(data.id)
                .catch((error) => {
                    console.log(error);
                })
        }
    }


    return (

        <div className='container m-3' >
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='form-control'
                    autoFocus
                    value={busqueda}
                    onChange={handleInputChange}
                />
            </form>
            <div className='d-flex justify-content-center'>
                {
                    !pokemon ? (
                        <h3>Cargando...</h3>
                    ) : (
                        <>
                           
                                {/* <h3>{pokemon.numero}</h3> */}
                            
                                <h3>{pokemon.nombre}</h3>
                          
                                <h4>{pokemon.peso}</h4>
                          
                            <img src={pokemon.img} alt={pokemon.img} />
                        </>
                    )
                }
                <button className='btn btn-info m-3' onClick={handleAnterior}>Anterior</button>
                <button className='btn btn-success m-3' onClick={handleSiguiente}>Siguiente</button>
            </div>
        </div>

    )
}
