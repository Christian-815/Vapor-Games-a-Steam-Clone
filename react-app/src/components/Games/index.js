import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import { getAllGames } from "../../store/games";
import { NavLink } from "react-router-dom";

const GetAllGames = () => {
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.games.allGames)
    const allGamesArr = Object.values(allGames)
    // console.log(allGamesArr)

    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch])


    if (!allGames) return null

    return (
        <>
            <h1>Games</h1>
            {allGamesArr.map((game) => {
                return (
                    <div key={game.id}>
                        <NavLink to={`/games/${game.id}`}>
                            {game.game_name}
                        </NavLink>
                    </div>
                )
            })}
        </>
    )
}

export default GetAllGames
