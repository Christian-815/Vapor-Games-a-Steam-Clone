import { useDispatch, useSelector } from "react-redux"



const ShoppingCart = () => {
    const dispatch = useDispatch();

    const userCart = useSelector(state => state.cart.userCart)
    const userCartArr = Object.values(userCart)

    return (
        <>
            <h1>Shopping Cart</h1>

            <div>
                <div>
                    {userCartArr.map((game) => {
                        return (
                            <div key={game.id}>
                                <div>
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div>
                    total
                </div>
            </div>

        </>
    )
}

export default ShoppingCart
