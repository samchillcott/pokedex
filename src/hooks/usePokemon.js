import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchPokemon = async (params) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export default function usePokemon(params) {
  return useQuery({ queryKey: ['pokemon'], queryFn: () => fetchPokemon(params) })
}