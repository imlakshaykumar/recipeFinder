import { Search } from "./search"

import '../styles/header.css'

export const Header = () => {
    return (
        <>
            <div className="headDiv">
                <h1 className="heading">Recipe Finder</h1>
                <Search />
            </div>

        </>
    )
}
