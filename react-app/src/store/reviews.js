const GET_GAME_REVIEWS = 'reviews/GET_GAME_REVIEWS'
const CREATE_GAME_REVIEW = 'reviews/CREATE_GAME_REVIEW'
const GET_USER_REVIEWS = 'reviews/GET_USER_REVIEWS'


// ACTION

export const actionGetGameReviews = (reviews) => ({
    type: GET_GAME_REVIEWS,
    reviews
})

export const actionCreateGameReview = (newReview) => ({
    type: CREATE_GAME_REVIEW,
    newReview
})

export const actionGetUserReviews = (userReviews) => ({
    type: GET_USER_REVIEWS,
    userReviews
})


// NORMALIZE REVIEWS

const normalizingAllReviews = (reviews) => {
    let normalizedReviews = {};
    // console.log("dsadasdasdsad", products)
    reviews.forEach(review => {
        normalizedReviews[review.id] = review;
    })
    // console.log("NORMALIZED sdsadsad", normalizedProducts)
    return normalizedReviews;
};

const normalizingUserReviews = (reviews) => {
    let normalizedReviews = {};
    reviews.forEach(review => {
        normalizedReviews[review.game_id] = review;
    })
    return normalizedReviews;
};


// THUNKS


export const getGameReviews = (gameId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/game/${gameId}`)

    if (response.ok) {
        const reviews = await response.json()
        // console.log('----RESPONSE---', reviews)
        const normalizedReviews = normalizingAllReviews(reviews)
        // console.log('-------THUNK REVIEWS-----', normalizedReviews)
        dispatch(actionGetGameReviews(normalizedReviews))
    }
}


export const createGameReview = (gameId, review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/new/game/${gameId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const newReview = await response.json()
        dispatch(actionCreateGameReview(newReview))
    }
}


export const getUserReviews = (userId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/user/${userId}`)

    if (response.ok) {
        const reviews = await response.json()
        // console.log('----RESPONSE---', reviews)
        const normalizedReviews = normalizingUserReviews(reviews)
        // console.log('-------THUNK REVIEWS-----', normalizedReviews)
        dispatch(actionGetUserReviews(normalizedReviews))
    }
}



// STATE

const initialState = { gameReviews: {}, newReview: {}, userReviews: {} }

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAME_REVIEWS: {
            const newState = { ...state }
            newState.gameReviews = action.reviews
            return newState
        }

        case CREATE_GAME_REVIEW: {
            const newState = { ...state };
            newState.newReview = action.newReview
            newState.gameReviews[action.newReview.id] = action.newReview
            newState.userReviews[action.newReview.game_id] = action.newReview
            return newState
        }

        case GET_USER_REVIEWS: {
            const newState = { ...state }
            newState.userReviews = action.userReviews
            return newState
        }

        // case DELETE_REVIEW:
        //     const deleteState = { ...state }
        //     delete deleteState.userReviews[action.reviewId];
        //     delete deleteState.productReviews[action.reviewId]
        //     delete deleteState.newReview[action.id];
        //     return deleteState

        // case UPDATE_USER_REVIEW:
        //     const updatedUserReviewState = { ...state }
        //     console.log('UPDATED REVIEW REDUCER', updatedUserReviewState)
        //     updatedUserReviewState.productReviews[action.updated_review.id] = action.updated_review
        //     updatedUserReviewState.userReviews[action.updated_review.id] = action.updated_review
        //     console.log('UPDATED REVIEW REDUCER', updatedUserReviewState)
        //     return updatedUserReviewState

        default:
            return state
    }
}


export default reviewsReducer
