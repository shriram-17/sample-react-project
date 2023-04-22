import { useState } from "react"


export default function Helloworld () {
    const[text,setext]=useState("HelloWorld")

    const changethetext = () =>{
        setext("Goodbye")
    } 

    return (
        <div>
            <h1>
                {text}
            </h1>
            <button onClick={changethetext}>
                Change
            </button>
        </div>
    )
}