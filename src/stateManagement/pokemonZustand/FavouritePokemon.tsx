import usePokemonStore from "./store/usePokemonStore.ts";
import Modal from "./components/Modal.tsx";
import {useState} from "react";

const FavouritePokemon =()=>{
    const favouritePokemon =usePokemonStore((state)=>state.favouritePokemon)
    const removeFromFavourites =usePokemonStore((state)=>state.removeFromFavourites)
    const[message,setMessage]=useState("")
    return(
        <div>
            {message&&<Modal message={message}></Modal>}

            {favouritePokemon.length>0?(
                <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
                    {favouritePokemon.map((pokemon,index)=>(
                    <div key={index} style={{boxShadow:"2px 2px 2px rgb(0,0,0,0.4)"}}>
                        <img
                            style={{height:"250px",width:"250px"}}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                        />
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2px"}}>
                            <h3>{pokemon.name}</h3>
                            <button
                                style={{height:"fit-content",
                                    width:"fit-content",
                                    padding:"5px",
                                    cursor:"pointer",
                                    backgroundColor:"rgb(232, 63, 37)",
                                    borderRadius:"5px",
                                    border:"none",
                                    color:"white",
                                    fontWeight:"bold"
                                }}
                                onClick={(e)=>{
                                    setTimeout(()=>{
                                        setMessage("")
                                    },3000)
                                    setMessage(pokemon.name+" removed to favourites")
                                e.preventDefault()
                                removeFromFavourites(pokemon.id)
                            }}>Remove from Favourites</button>
                        </div>

                    </div>
                    ))}
                </div>

                ):(
                <div>You have no favourite pokemon at the moment...please like first</div>
            )}
        </div>
    )
}
export default FavouritePokemon