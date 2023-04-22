import fetch from "node-fetch";
import { useState } from "react";

export default function Pokemon ()
{   
    
    const[pokemons,setpokemons]=useState([])
    
    const fetchpokemondata = () =>{
        
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        
        .then(response => {
            return response.json()
          })

          .then(data => {
            setpokemons(data)
          })
    }
    
    return(
        <div>
            <p>{pokemons}</p>
            <button onClick={fetchpokemondata}>
             add the Api
            </button>
        </div>
    )

}