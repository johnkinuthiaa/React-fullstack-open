import {create} from "zustand"
import {PokemonType} from "../types/types.ts";

type FetchPokemon ={
    fetchedPokemon:PokemonType[],
    fetchAllPokemon:(pokemons:PokemonType[])=>void
}
const useFetchPokemon =create<FetchPokemon>()((set)=>({
    fetchedPokemon:[],
    fetchAllPokemon:(pokemons)=>set((state)=>({
        fetchedPokemon:[...state.fetchedPokemon,...pokemons]
    }))
}))
export default useFetchPokemon