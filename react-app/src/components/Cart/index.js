import { useDispatch, useSelector } from "react-redux"
import './cart.css'



const ShoppingCart = () => {
    const dispatch = useDispatch();

    const userCart = useSelector(state => state.cart.userCart)
    const userCartArr = Object.values(userCart)

    return (
        <>
            <h1>Shopping Cart</h1>

            <div className="cart-block">
                <div className="cart-games">
                    {userCartArr.map((game) => {
                        return (
                            <div key={game.id} className="cart-indiv-game-info">
                                <div className="cart-indiv-game-left">
                                    <img src={game.game_info.main_img} className="cart-game-img" />
                                    <div className="cart-indiv-game-name">
                                        {game.game_info.game_name}
                                    </div>
                                </div>

                                <div className="cart-indiv-game-right">
                                    <div>
                                        ${game.game_info.price}
                                    </div>
                                    <button className="cart-remove-game">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="cart-total">
                    <div className="cart-estimate">
                        <div>
                            Estimated total
                        </div>
                        <div>
                            $total price
                        </div>
                    </div>
                    <div className="cart-purchase">
                        <button>Purchase for myself</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShoppingCart
