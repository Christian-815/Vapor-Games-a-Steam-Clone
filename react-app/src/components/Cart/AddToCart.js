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
    const userLibrary = useSelector(state => state.library.userLibrary)
    const userLibraryArr = Object.values(userLibrary)
    const userCartArr = Object.values(cart)
    const history = useHistory()


    useEffect(() => {
        dispatch(GetUserCart())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            return history.push('/login')
        }

        const game = {
            user_id: user.id,
            game_id: game_id
        }

        dispatch(AddToCart(game))
        return history.push('/cart')

    }

    const renderCartButton = () => {
        if (user) {
            if (userLibraryArr.length) {
                // console.log('userLibrary in here')
                const inLibrary = userLibraryArr.filter(game => game.game_id === parseInt(game_id))

                if (inLibrary.length) {
                    return (
                        <>
                            <button className='go-to-library-button' onClick={() => history.push('/library')}>Go to Library</button>
                        </>
                    )
                }
            }

            // console.log('cart in here')
            if (userCartArr.length) {
                const inCart = userCartArr.filter(game => game.game_id === parseInt(game_id))

                if (inCart.length) {
                    return (
                        <>
                            <button className='go-to-cart-button' onClick={() => history.push('/cart')}>Go to checkout</button>
                        </>
                    )
                } else {
                    // console.log('can buy in here')
                    return (
                        <>
                            <button className='add-to-cart-button' onClick={handleSubmit}>Add to Cart</button>
                        </>
                    )
                }
            } else {
                // console.log('can buy in here')
                return (
                    <>
                        <button className='add-to-cart-button' onClick={handleSubmit}>Add to Cart</button>
                    </>
                )
            }
        } else {
            return (
                <>
                    <button className='add-to-cart-button' onClick={handleSubmit}>Add to Cart</button>
                </>
            )
        }
    }

    return (
        <>
            {renderCartButton()}
        </>
    )
}

export default AddToUserCart;
