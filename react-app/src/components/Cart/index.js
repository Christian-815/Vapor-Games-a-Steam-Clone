import { useDispatch, useSelector } from "react-redux"
import './cart.css'
import { DeleteGameFromCart } from "../../store/carts";
import OpenModalButton from "../OpenModalButton";
import PurchaseGamesModal from "./CompletePurchaseModal";



const ShoppingCart = () => {
    const dispatch = useDispatch();

    const userCart = useSelector(state => state.cart.userCart)
    const userCartArr = Object.values(userCart)

    const handleRemoveClick = (gameInfo) => {
        dispatch(DeleteGameFromCart(gameInfo))
    }

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
                                    <button className="cart-remove-game" onClick={() => handleRemoveClick(game.game_info)}>
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
                        {/* <button className="cart-purchase-button">Purchase for myself</button> */}
                        <OpenModalButton
                            buttonText="Purchase for myself"
                            modalComponent={<PurchaseGamesModal />}
                            className="cart-purchase-button"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShoppingCart
