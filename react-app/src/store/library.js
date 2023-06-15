const ADD_TO_LIBRARY = "library/ADD_TO_LIBRARY"
const GET_USER_LIBRARY = "library/GET_USER_LIBRARY"

export const actionGetUserLibrary = (userLibrary) => ({
    type: GET_USER_LIBRARY,
    userLibrary
})

export const actionAddToLibrary = (gameList) => ({
    type: ADD_TO_LIBRARY,
    gameList
})


const normalizeLibrarys = (libraryGames) => {
    console.log('games to normalize', libraryGames)
    let normalizedLibraryGames = {};
    libraryGames.forEach(libraryGame => {
        normalizedLibraryGames[libraryGame.id] = libraryGame
    });

    return normalizedLibraryGames
}


export const GetUserLibrary = () => async (dispatch) => {
    const response = await fetch(`/api/library/`)

    if (response.ok) {
        const library = await response.json()
        const normalizedLibrary = normalizeLibrarys(library)
        await dispatch(actionGetUserLibrary(normalizedLibrary))
    }
}

export const AddToLibrary = (gameList) => async (dispatch) => {
    // console.log("game WENT THROUGH HERE!!:",game)
    const response = await fetch(`/api/library/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameList)
    })

    if (response.ok) {
        const libraryGames = await response.json();
        console.log('response to post okay', libraryGames)
        const normalizedLibraryGames = normalizeLibrarys(libraryGames)
        await dispatch(actionAddToLibrary(normalizedLibraryGames))
        await dispatch(GetUserLibrary())
        return libraryGames;
    }
}

export const DeleteGameFromLibrary = (game) => async (dispatch) => {
    const response = await fetch(`/api/library/deleteGame`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })

    if (response.ok) {
        // console.log("DELETE game FROM library RESPONSE")

        await dispatch(GetUserLibrary())
    }
}

export const updateGameInstall = (game) => async (dispatch) => {
    const response = await fetch(`/api/library/updateInstall/${game.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(game)
    });

    if (response.ok) {
        await dispatch(GetUserLibrary())
    }
}

const initialState = { userLibrary: {} }

export default function libraryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LIBRARY: {
            const newState = { ...state }
            newState.userLibrary = action.userLibrary
            return newState
        }
        case ADD_TO_LIBRARY: {
            const newState = { ...state }
            const gamesList = Object.values(action.gameList)
            gamesList.map(game => {
                newState.userLibrary[game.id] = action.game
            })
            return newState
        }
        default:
            return state
    }
}
