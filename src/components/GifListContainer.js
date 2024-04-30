import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer( {props} ){
    const [gifs, setGifs] = useState([])
    
    useEffect(()=>{
        fetch("https://api.giphy.com/v1/gifs/search?q=hello&api_key=0hBKeFd5PpLOvXkOnx0zFN5NLkFN6QBX&rating=g&limit=3")
        .then(r=>r.json())
        .then(gifData=>{
            const gifImages = gifData.data.map(gif => {
                return {
                id: gif.id,
                image: gif.images.original.url,
                title: gif.title
                }
            })
            console.log(gifImages)
            setGifs(gifImages)
        })
    }, [])

    function handleSearchGif(searchValue){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=0hBKeFd5PpLOvXkOnx0zFN5NLkFN6QBX&rating=g&limit=3`)
        .then(r=>r.json())
        .then(gifData=>{
            const gifImages = gifData.data.map(gif => {
                return {
                id: gif.id,
                image: gif.images.original.url,
                title: gif.title
                }
            })
            console.log(gifImages)
            setGifs(gifImages)
        })
    }

    return (
        <div>
            <GifSearch onSearchGif={handleSearchGif}/>
            <GifList gifs={gifs}/>
        </div>
    )
}

export default GifListContainer