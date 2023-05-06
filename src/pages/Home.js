import React, { useEffect, useState } from 'react'

// import '@splidejs/react-splide/css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { Splide, SplideSlide } from "@splidejs/react-splide"

const Home = () => {
  useEffect(() => {
    getAllPokemon();
  }, [])

  const [allPokemon, setAllPokemon] = useState([])

  const getAllPokemon = async () => {

    const localStorageCheck = localStorage.getItem("allPokemon");

    if (localStorageCheck) {
      setAllPokemon(JSON.parse(localStorageCheck))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=4`)
      const data = await api.json()
      console.log(data);
      localStorage.setItem("allPokemon", JSON.stringify(data))
      setAllPokemon(data);
    }
  }

  return (
    <div>
      <Wrapper>
        <h3>All Pokemon</h3>
        {/* <Splide
          options={ {
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem'
          } }
        > */}
        { allPokemon.map((pokemon) => {
          return (
            // <SplideSlide key={ recipe.id }>
            <Card>
              <Link to={ "/pokemon/" + pokemon.name }>
                <p>{ pokemon.name }</p>
                <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
                <Gradient />
              </Link>
            </Card>
            // </SplideSlide>
          )
        }) }
        {/* </Splide> */ }
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
`;

export default Home