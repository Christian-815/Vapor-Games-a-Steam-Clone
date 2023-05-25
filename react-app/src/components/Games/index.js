import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import { getAllGames } from "../../store/games";
import { NavLink } from "react-router-dom";
import './games.css'

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
            <div className="home-games-list">
                {allGamesArr.map((game) => {
                    return (
                        <div key={game.id}>
                            <div>
                            </div>
                            <NavLink to={`/games/${game.id}`}>
                                <img src={game.main_img} />
                                {game.game_name}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default GetAllGames
