import { useDispatch, useSelector } from "react-redux"
import './cart.css'
import { DeleteGameFromCart } from "../../store/carts";
import OpenModalButton from "../OpenModalButton";
import PurchaseGamesModal from "./CompletePurchaseModal";
import { useHistory } from "react-router-dom";



const ShoppingCart = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const userCart = useSelector(state => state.cart.userCart)
    const userCartArr = Object.values(userCart)

    const handleRemoveClick = (gameInfo) => {
        dispatch(DeleteGameFromCart(gameInfo))
    }

    const calculateTotal = () => {
        let total = 0;

        userCartArr.forEach((cartItem) => {
            total += cartItem.game_info.price
        })

        return total.toFixed(2)
    }


    const renderShoppingCart = () => {
        if (userCartArr.length) {
            return (
                <>
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
                                    ${calculateTotal()}
                                </div>
                            </div>
                            <div className="cart-purchase">
                                <OpenModalButton
                                    buttonText="Purchase for myself"
                                    modalComponent={<PurchaseGamesModal total={calculateTotal()}/>}
                                    className="cart-purchase-button"
                                />
                            </div>
                        </div>
                    </div>

                </>
            )
        } else {
            return (
                <>
                    <div className="cart-total">
                        <div className="cart-estimate">
                            <div>
                                Estimated total
                            </div>
                            <div>
                                $0.00
                            </div>
                        </div>
                        <div className="cart-purchase">
                            <button className="cart-purchase-button-disabled">Purchase for myself</button>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className="cart-block">
                <h1>Shopping Cart</h1>

                <div>
                    {renderShoppingCart()}
                </div>

                <div>
                    <button onClick={() => history.push('/')} className="continue-shopping-button">Continue Shopping</button>
                </div>
            </div>

        </>
    )
}

export default ShoppingCart
