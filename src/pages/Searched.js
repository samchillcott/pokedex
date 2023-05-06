import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'

const Searched = () => {
  const [searchedPokemon, setSearchedPokemon] = useState([])
  let params = useParams()
  console.log("🚀 ~ file: Searched.js:9 ~ Searched ~ params:", params)

  const getSearched = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?name=${params.name}*`)
    const pokemons = await data.json();
    console.log("🚀 ~ file: Searched.js:14 ~ getSearched ~ pokemons:", pokemons)
    setSearchedPokemon(pokemons.results || [])
  }

  useEffect(() => {
    getSearched(params.search)
  }, [params.search])


  return (
    <Grid
      animate={ { opacity: 1 } }
      initial={ { opacity: 0 } }
      exit={ { opacity: 0 } }
      transition={ { duration: 0.5 } }
    >
      { searchedPokemon.map((pokemon) => {
        return (
          <Card key={ pokemon.id }>
            <Link to={ "/pokemon/" + pokemon.name }>
              {/* <img src={ item.image } alt="" /> */}
              <h4>{ pokemon.name }</h4>
            </Link>
          </Card>
        )
      }) }
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched