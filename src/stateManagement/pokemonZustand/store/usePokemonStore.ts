import {create} from "zustand"
import {PokemonType} from "../types/types.ts";

interface PokemonStore{
    favouritePokemon:PokemonType[],
    addToFavourites:(pokemon:PokemonType)=>void,
    removeFromFavourites:(id:number)=>void

}

const usePokemonStore =create<PokemonStore>()((set)=>({
    favouritePokemon:[],
    addToFavourites:(pokemon:PokemonType)=>set((state)=>({
        favouritePokemon:state.favouritePokemon.includes(pokemon)?[...state.favouritePokemon]:[...state.favouritePokemon,pokemon]
    })),
    removeFromFavourites:(id:number)=>set((state)=>({
        favouritePokemon:[...state.favouritePokemon.filter((pokemon)=>pokemon.id !==id)]
    }))
}))
export default usePokemonStore