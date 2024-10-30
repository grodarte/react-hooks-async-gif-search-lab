import { useEffect, useState } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

const API = `https://api.giphy.com/v1/gifs/search?q=dog&api_key=TssBEz3h92j1wl0nJecUoBOtBc9KEDSS&rating=g`

function GifListContainer(){
    const [gifs, setGifs] = useState([])

    useEffect(()=>{
        fetch(API)
        .then(r=>r.json())
        .then(gifData=>{
            const firstThree = gifData.data.slice(0,3)
            setGifs(firstThree)
        }
        )
    }, [])

    function handleSearchGifs(searchWord){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=TssBEz3h92j1wl0nJecUoBOtBc9KEDSS&rating=g`)
        .then(r=>r.json())
        .then(gifData=>{
            const firstThree = gifData.data.slice(0,3)
            setGifs(firstThree)

        })
    }

    return (
        <>
            <GifSearch onSearchGifs={handleSearchGifs}/>
            <GifList gifs={gifs}/>
        </>
    )
}

export default GifListContainer