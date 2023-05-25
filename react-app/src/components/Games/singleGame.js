import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { getAllGames, getOneGame } from "../../store/games";
import AddToUserCart from "../Cart/AddToCart";
import GameReviews from "../Reviews";

const GetOneGame = () => {
    const dispatch = useDispatch();
    const { game_id } = useParams();
    const game = useSelector(state => state.games.allGames[game_id])
    // console.log(game)

    useEffect(() => {
        dispatch(getOneGame(game_id))
        dispatch(getAllGames())
    }, [dispatch])


    if (!game) return null;

    return (
        <div>
            <div className="home-games-list">
                <h1>one game</h1>
                <div>
                    <img src={game.main_img} />
                </div>
                <div>
                    {game.game_name}
                    <AddToUserCart />
                </div>
            </div>




            <div>
                <GameReviews />
            </div>
        </div>
    )
}

export default GetOneGame
