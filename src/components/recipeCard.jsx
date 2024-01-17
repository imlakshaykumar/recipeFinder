import { useState } from 'react'
import '../styles/recipecard.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const RecipeCard = ({ data }) => {

    const recipePerPage = 8
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastIndex = currentPage * recipePerPage;
    const indexOfFirstIndex = indexOfLastIndex - recipePerPage;
    const currentRecipe = data?.slice(indexOfFirstIndex, indexOfLastIndex)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const handleClick = (url) => {
        window.open(url, '_blank')
    }
    return (
        <>
            <div className="contentDiv">
                <div className="contentGrid">
                    {
                        currentRecipe?.map((item, key) => {
                            return (
                                <div key={ key } className="card">
                                    <div className="contentImageDiv">
                                        <img
                                            className='contentImage'
                                            src={ item.recipe.images.SMALL.url } alt="" />
                                    </div>
                                    <button
                                        onClick={ () => handleClick(item.recipe.url) }
                                        className='contentButton'>
                                        { item.recipe.label }
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="paginationDiv">
                    {/* <button
                        onClick={ () => paginate(currentPage - 1) }
                        className={ `paginationBtn currentPage === 1 ? 'disabled' : '' ` }
                        disabled={ currentPage === 1 }
                    >
                        <FontAwesomeIcon icon={ faAngleLeft } />
                    </button> */}
                    {
                        Array.from({ length: Math.ceil(data?.length / recipePerPage) }).map((_, index) => (

                            <button className='paginationBtn' key={ index } onClick={ () => paginate(index + 1) }>
                                { index + 1 }
                            </button>
                        ))
                    }
                    {/* <button
                        onClick={ () => paginate(currentPage + 1) }
                        className={ `paginationBtn currentPage === Math.ceil(data?.length / recipePerPage) ? 'disabled' : '' ` }
                        disabled={ currentPage === Math.ceil(data?.length / recipePerPage) }
                    >
                        <FontAwesomeIcon icon={ faAngleRight } />
                    </button> */}
                </div>
            </div>
        </>
    )
}

RecipeCard.propTypes
