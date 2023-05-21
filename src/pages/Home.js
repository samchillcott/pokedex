import React from 'react'

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { capitalizeFirstLetter } from '../helpers/helpers';
import useAllPokemon from '../hooks/useAllPokemon';

const Home = () => {

  const allPokemon = useAllPokemon()
  console.log("🚀 ~ file: Home.js:17 ~ Home ~ allPokemon:", allPokemon)

  // const getAllPokemon = async () => {

  //   const localStorageCheck = localStorage.getItem("allPokemon");

  //   if (localStorageCheck) {
  //     // grab from local storage and set to state
  //     allPokemon = (JSON.parse(localStorageCheck))
  //   } else {
  //     // make call and set response to local storage

  //     localStorage.setItem("allPokemon", JSON.stringify(data.results))
  //     setAllPokemon(data.results);
  //   }
  // }

  return (
    <div>
      <Wrapper>
        <h3>All Pokemon</h3>
        { allPokemon.isLoading && <p>Loading Pokemon...</p> }
        { allPokemon.isError && <p>Could not find Pokemon</p> }
        { allPokemon.isSuccess &&
          allPokemon.data.map((pokemon) => {
            return (
              <Card>
                <Link to={ "/pokemon/" + pokemon.name }>
                  <p>{ capitalizeFirstLetter(pokemon.name) }</p>
                  <Gradient />
                </Link>
              </Card>
            )
          }) }
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem
`;

const Card = styled.div`
  min-height: 2rem;
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
    color: black;
    /* color: white; */
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