import '../styles/navbar.css'

export const NavBar = () => {
    return (
        <>
            <div className="navDiv">
                <div className="navImage">
                    <div className="imageDiv">
                        <img className="image" src='https://images.unsplash.com/photo-1615557960916-5f4791effe9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDUxMDYzMDR8&ixlib=rb-4.0.3' alt='chicken image' />
                    </div>
                    <p>Non-veg</p>
                </div>

                <div className="navImage">
                    <div className="imageDiv">
                        <img className="image" src='https://images.unsplash.com/photo-1626082936010-1ff5635bde4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDUxMDY0Mzl8&ixlib=rb-4.0.3' alt='pizza image' />
                    </div>
                    <p>Pizza</p>
                </div>
                <div className="navImage">
                    <div className="imageDiv">
                        <img className="image" src='https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDUxMDY2MDN8&ixlib=rb-4.0.3' alt='veg' />
                    </div>
                    <p>Veg</p>
                </div>
                <div className="navImage">
                    <div className="imageDiv">
                        <img className="image" src='https://images.unsplash.com/photo-1619096534329-564c333a95b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDUxMDY3NDd8&ixlib=rb-4.0.3' alt='sandwich' />
                    </div>
                    <p>Sandwich</p>
                </div>



            </div>
        </>
    )
}
