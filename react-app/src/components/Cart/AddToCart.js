import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AddToCart } from '../../store/carts';
import { GetUserCart } from '../../store/carts';

const AddToUserCart = () => {
    const { game_id } = useParams()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.userCart)
    const user = useSelector((state) => state.session.user)
    const userCartArr = Object.values(cart)
    const history = useHistory()


    useEffect(() => {
        dispatch(GetUserCart())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            window.alert("Please Log in or Sign Up to purchase!")
            return
        }

        let gameQuantityExceeded = false;

        if (userCartArr.length > 0) {
            userCartArr.forEach(game => {
                // console.log("game----------->>>", game.product_id, product_id)
                if (game.game_id === game_id) {
                    window.alert("You already have this game in your cart")
                    gameQuantityExceeded = true;
                    return
                }

            })
        }

        if (gameQuantityExceeded) {
            return
        };

        const game = {
            user_id: user.id,
            game_id: game_id
        }

        dispatch(AddToCart(game))
        return history.push('/cart')

    }

    return (
        <>
            <button className='add-to-cart-button' onClick={handleSubmit}>Add to Cart</button>
        </>
    )
}

export default AddToUserCart;
