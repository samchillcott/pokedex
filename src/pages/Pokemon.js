import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import usePokemon from '../hooks/usePokemon'

const Pokemon = () => {
  let params = useParams()
  const pokemon = usePokemon(params)

  return (
    <DetailWrapper>
      { pokemon.isLoading && <p>Loading Pokemon...</p> }
      { pokemon.isError && <p>Could not find Pokemon</p> }
      { pokemon.isSuccess && (
        <>
          <div className="">
            <h2>{ pokemon.data.name }</h2>
            <p>Height: { pokemon.data.weight }</p>
            <p>Weight: { pokemon.data.height }</p>
            <p>Abilities: { pokemon.data.abilities[0].ability.name }</p>
            <img src={ pokemon.data.sprites.front_default } alt="" />
          </div>
        </>
      ) }
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
export default Pokemon