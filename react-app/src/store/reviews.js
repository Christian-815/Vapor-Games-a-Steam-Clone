const GET_GAME_REVIEWS = 'reviews/GET_GAME_REVIEWS'
const CREATE_GAME_REVIEW = 'reviews/CREATE_GAME_REVIEW'


// ACTION

export const actionGetGameReviews = (reviews) => ({
    type: GET_GAME_REVIEWS,
    reviews
})

export const actionCreateGameReview = (newReview) => ({
    type: CREATE_GAME_REVIEW,
    newReview
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


// THUNKS


export const getGameReviews = (game_id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/game/${game_id}`)

    if (response.ok) {
        const reviews = await response.json()
        // console.log('----RESPONSE---', reviews)
        const normalizedReviews = normalizingAllReviews(reviews)
        // console.log('-------THUNK REVIEWS-----', normalizedReviews)
        dispatch(actionGetGameReviews(normalizedReviews))
    }
}


export const createGameReview = (game_id, review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/new/game/${game_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const newReview = await response.json()
        dispatch(actionCreateGameReview(newReview))
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

        // case GET_USER_REVIEWS:
        //     const userReviewState = { ...state }
        //     userReviewState.userReviews = action.user_reviews
        //     return userReviewState

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
