import '../styles/recipecard.css'

export const RecipeCard = ({ data }) => {
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
                                    <button className='contentButton'>
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
