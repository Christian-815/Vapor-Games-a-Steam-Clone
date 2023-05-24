const ADD_TO_CART = "cart/ADD_TO_CART"
const GET_USER_CART = "cart/GET_USER_CART"

export const actionGetUserCart = (userCart) => ({
    type: GET_USER_CART,
    userCart
})

export const actionAddToCart = (game) => ({
    type: ADD_TO_CART,
    game
})


const normalizeCarts = (cartGames) => {
    let normalizedCartGames = {};
    cartGames.forEach(cartGame => {
        normalizedCartGames[cartGame.id] = cartGame
    });

    return normalizedCartGames
}


export const GetUserCart = () => async (dispatch) => {
    const response = await fetch(`/api/cart/`)

    if (response.ok) {
        const cart = await response.json()
        const normalizedCart = normalizeCarts(cart)
        await dispatch(actionGetUserCart(normalizedCart))
    }
}

export const AddToCart = (game) => async (dispatch) => {
    // console.log("game WENT THROUGH HERE!!:",game)
    const response = await fetch(`/api/cart/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })

    if (response.ok) {
        const cartGame = await response.json();
        await dispatch(actionAddToCart(cartGame))
        await dispatch(GetUserCart())
        return cartGame;
    }
}

export const DeleteGameFromCart = (game) => async (dispatch) => {
    const response = await fetch(`/api/cart/deleteGame`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })

    if (response.ok) {
        // console.log("DELETE game FROM CART RESPONSE")

        await dispatch(GetUserCart())
    }
}

export const CheckoutFromCart = (userId) => async (dispatch) => {
    const response = await fetch(`/api/cart/checkoutFromCart`, {
        method: 'DELETE'
    })

    if (response.ok) {
        // console.log("DELETE ALL ITEMS FROM CART RESPONSE")

        await dispatch(GetUserCart())
    }
}

const initialState = { userCart: {} }

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_CART: {
            const newState = { ...state }
            newState.userCart = action.userCart
            return newState
        }
        case ADD_TO_CART: {
            const newState = { ...state }
            newState.userCart[action.game.id] = action.game
            return newState
        }
        default:
            return state
    }
}
