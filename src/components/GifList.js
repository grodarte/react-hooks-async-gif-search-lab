import React from "react";

function GifList({ gifs }){
    const gifElements = gifs.map(gif=> {
        return (
            <li key={gif.id}>
                <img src={gif.image} alt={gif.title}/>
            </li>
        )
    })

    return (
        <ul>
            {gifElements}
        </ul>
    )
}

export default GifList