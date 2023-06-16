const GET_ALL_GAMES = 'games/GET_ALL_GAMES'
const GET_ONE_GAME = 'games/GET_ONE_GAME'
const GET_SEARCH = 'games/GET_SEARCH'


// ACTIONS

export const actionGetAllGames = (games) => ({
    type: GET_ALL_GAMES,
    games
})

export const actionGetOneGame = (game) => ({
    type: GET_ONE_GAME,
    game
})

export const actionGetSearchedGames = (games) => ({
    type: GET_SEARCH,
    games
})



//NORMALIZATION FUNCTIONS
const normalizingAllGames = (games) => {
    let normalizedGames = {};
    games.forEach(game => {
        normalizedGames[game.id] = game;
    })
    return normalizedGames;
};

// THUNKS

export const getAllGames = () => async (dispatch) => {
    const response = await fetch('/api/games/')

    if (response.ok) {
        const games = await response.json()
        const normalizedGames = normalizingAllGames(games)
        dispatch(actionGetAllGames(normalizedGames))
    }
}

export const getOneGame = (gameId) => async (dispatch) => {
    const response = await fetch(`/api/games/${gameId}`)

    if (response.ok) {
        const game = await response.json()
        dispatch(actionGetOneGame(game))
    }
}

export const getSearchResultGames = (search_terms) => async (dispatch) => {

    const response = await fetch(`/api/search/${search_terms}`);

    if (response.ok) {
        const searchResultGames = await response.json();
        const normalizedGames = normalizingAllGames(searchResultGames);
        dispatch(actionGetSearchedGames(normalizedGames));
        return normalizedGames;
    }
}





// REDUCER

const initialState = { allGames: {}, singleGame: {}, userGames: {}, searchedGames: {} }

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES: {
            const newState = {...state};
            newState.allGames = action.games;
            return newState;
        }

        case GET_ONE_GAME: {
            const newState = {...state};
            newState.singleGame = action.game
            return newState
        }

        case GET_SEARCH: {
            const newState = {...state};
            newState.searchedGames = action.games;
            return newState
        }

        default: return state
    }
}

export default gamesReducer
