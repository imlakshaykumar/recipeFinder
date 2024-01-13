import '../styles/search.css'

export const Search = () => {
    return (
        <>
            <div className="searchDiv">
                <input
                    type="search"
                    name="search"
                    id="searchInput"
                    placeholder="what would you like to have?"
                />
                <button className="searchBtn">Search</button>
            </div>
        </>
    )
}
