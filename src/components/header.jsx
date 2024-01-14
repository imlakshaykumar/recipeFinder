import { Search } from "./search"

import '../styles/header.css'

export const Header = ({ setQuery, setData, handleSearch, searchInput, setsearchInput }) => {
    return (
        <>
            <div className="headDiv">
                <h1 className="heading" onClick={ () => setQuery(null) }>Recipe Finder</h1>

                <Search
                    setQuery={ setQuery }
                    handleSearch={ handleSearch }
                    setData={ setData }
                    searchInput={ searchInput }
                    setsearchInput={ setsearchInput }
                />
            </div>

        </>
    )
}

Header.propTypes
