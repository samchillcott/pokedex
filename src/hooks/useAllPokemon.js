import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchAllPokemon = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
    return response.data.results
  } catch (error) {
    console.log(error);
  }
}

export default function useAllPokemon() {
  return useQuery({ queryKey: ['allPokemon'], queryFn: () => fetchAllPokemon() })
}