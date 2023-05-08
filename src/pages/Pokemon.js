import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Pokemon = () => {
  let params = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const fetchDetails = async () => {
    setLoading(true)
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      // throw new Error("error")
      const detailData = await data.json()
      setPokemon(detailData)
      setLoading(false)
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])

  if (loading)return <p>loading..</p>
  if (errorMessage)return <p>error..</p>
  if (!pokemon)return <p>No Pokemon found</p>

  return (
    <DetailWrapper>
      <div className="">
        <h2>{ pokemon.name }</h2>
        <p>{ pokemon.weight }</p>
        <p>{ pokemon.height }</p>
        {/* <p>{ pokemon.abilities[0].ability.name }</p> */ }
        <img src={ pokemon.sprites.front_default } alt="" />
      </div>
      {/* <Info >
        <Button
          className={ activeTab === "instructions" ? "active" : "" }
          onClick={ () => setActiveTab("instructions") }

        >
          Instructions
        </Button>
        <Button
          className={ activeTab === "ingredients" ? "active" : "" }
          onClick={ () => setActiveTab("ingredients") }
        >
          Ingredients
        </Button>
        { activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={ { __html: details.summary } }></h3>
            <h3 dangerouslySetInnerHTML={ { __html: details.instructions } }></h3>
          </div>
        ) }
        { activeTab === "ingredients" && (
          <ul>
            { details.extendedIngredients.map((ingredient) => (
              <li key={ ingredient.id }>{ ingredient.original }</li>
            )) }
          </ul>
        ) }
      </Info> */}
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

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Pokemon