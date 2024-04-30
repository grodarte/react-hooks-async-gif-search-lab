import React, {useState} from "react";

function GifSearch({ onSearchGif }){
    const [searchValue, setSearchValue] = useState("")

    function handleChange(e){
        setSearchValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        onSearchGif(searchValue)
        setSearchValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter a Search Term:</label>
            <input type="text" name="search" id="search-box" value={searchValue} onChange={handleChange}/>
            <button>Find Gifs</button>
        </form>
    )
}

export default GifSearch