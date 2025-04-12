import { useEffect, useState} from "react";

export type PokemonType ={
    "id":number,
    "name": string,
    "type": string[],
    "hp": number,
    "attack": number,
    "defense": number,
    "special_attack": number,
    "special_defense": number,
    "speed": number
}
const UsePokemon =()=>{
    const[pokemon,setPokemon] =useState<PokemonType[]>([])
    useEffect(() => {
        fetch("/pokemon.json")
            .then((response)=>response.json())
            .then((data)=>setPokemon(data))
    }, []);
    return {pokemon}
}
export default UsePokemon