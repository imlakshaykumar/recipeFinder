import '../styles/recipecard.css'

export const RecipeCard = ({ data }) => {

    const handleClick = (url) => {
        window.open(url, '_blank')
    }
    return (
        <>
            <div className="contentDiv">
                <div className="contentGrid">

                    {
                        data?.map((item, key) => {
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

            </div>
        </>
    )
}

RecipeCard.propTypes
