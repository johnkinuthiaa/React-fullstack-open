import {useEffect, useState} from "react";
import useFetchPokemon from "./store/useFetchPokemon.ts";
import usePokemonStore from "./store/usePokemonStore.ts";
import FavouritePokemon from "./FavouritePokemon.tsx";
import Modal from "./components/Modal.tsx";

const PokemonUi =()=>{
    // fetching
    const fetchedPokemon =useFetchPokemon((state)=>state.fetchAllPokemon)
    const allPokemon =useFetchPokemon((state)=>state.fetchedPokemon)

    //adding to favourites
    const addFavourite =usePokemonStore((state)=>state.addToFavourites)

    const[message,setMessage]=useState("")
    useEffect(() => {
        const fetchPokemon =async ()=>{
            const response =await fetch("/pokemon.json")
            const data =await response.json()
            fetchedPokemon(data)
        }
        fetchPokemon().then(() => console.log("data fetched successfully"))
    }, []);
    return(
        <div>
            <h1>Pokemon</h1>
            <div>Your faves</div>
            <FavouritePokemon></FavouritePokemon>
            <h2>All of them</h2>
            {message&&<Modal message={message}></Modal>}
            <div>
                {allPokemon.length>0?(
                    <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
                        {allPokemon.map((pokemon,index)=>(
                            <div key={index} style={{boxShadow:"2px 2px 2px rgb(0,0,0,0.4)"}}>
                                <img
                                    style={{height:"250px",width:"250px"}}
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                                />
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2px"}}>
                                    <h3>{pokemon.name}</h3>
                                    <button
                                        style={{height:"fit-content"
                                            ,width:"fit-content",
                                            padding:"5px",
                                            cursor:"pointer",
                                            backgroundColor:"rgb(96, 181, 255)",
                                            borderRadius:"5px",
                                            border:"none",
                                            color:"white",
                                            fontWeight:"bold"
                                        }}
                                        onClick={(e)=>{
                                            setTimeout(()=>{
                                                setMessage("")
                                            },3000)
                                            setMessage(pokemon.name+" added to favourites")
                                        e.preventDefault()
                                        addFavourite(pokemon)
                                    }}>Add Favourite</button>
                                </div>

                            </div>
                        ))}
                    </div>
                ):(
                    <div>Pokemon list is empty</div>
                )}
            </div>
        </div>
    )
}
export default PokemonUi