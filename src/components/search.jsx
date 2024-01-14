// import { useState } from 'react';
import '../styles/search.css'

export const Search = ({ searchInput, setsearchInput, handleSearch }) => {

    const handleForm = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="searchDiv">
                <form onSubmit={ handleForm }>
                    <input
                        type="search"
                        name="search"
                        value={ searchInput }
                        id="searchInput"
                        placeholder="what would you like to have?"
                        onChange={ (e) => setsearchInput(e.target.value) }
                    />
                    <button className="searchBtn" onClick={ handleSearch }>Search</button>
                </form>
            </div >
        </>
    )
}

Search.propTypes
