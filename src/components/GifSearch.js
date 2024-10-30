import { useState } from "react"

function GifSearch({ onSearchGifs }){
    const [search, setSearch] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        onSearchGifs(search)
        setSearch("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Enter a Search Term:</h3>
            <input 
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder=""
            />
            <button type="submit">Find GIFs</button>
        </form>
    )
}

export default GifSearch