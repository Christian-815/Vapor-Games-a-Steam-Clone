import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import { getAllGames } from "../../store/games";
import { NavLink } from "react-router-dom";
import './games.css'

const GetAllGames = () => {
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.games.allGames)
    const allGamesArr = Object.values(allGames)
    const [gamesKey, setGamesKey] = useState(1);
    const [mainImg, setMainImg] = useState(null)


    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch, gamesKey])

    const handleRightClick = () => {
        if (gamesKey === 10) {
            setGamesKey(1)
            setMainImg(null)
        } else {
            let newKey = gamesKey + 1
            setGamesKey(newKey)
            setMainImg(null)
        }
    }

    const handleLeftClick = () => {
        if (gamesKey === 1) {
            setGamesKey(10)
            setMainImg(null)
        } else {
            let newIndex = gamesKey - 1
            setGamesKey(newIndex)
            setMainImg(null)
        }
    }

    const featuredGame = allGames[gamesKey]


    if (!allGames) return null

    return (
        <>
            <div className="featured-games-div">
                <div style={{ color:'white', marginTop: '2em', marginBottom: '1em', paddingLeft: '3.5em' }}>
                    FEATURED & RECOMMENDED
                </div>
                <div className="featured-games-block">
                    <div className="featured-game-arrow-left" onClick={() => handleLeftClick()}>
                        <img src='/images/left-arrow.png' />
                    </div>

                    <div className="featured-games-game">
                        <div style={{ width: '35em' }} onMouseOver={() => setMainImg(featuredGame.main_image)}>
                            {mainImg ?
                                <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src={mainImg} />
                                :
                                <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src={featuredGame.main_img} />
                            }
                        </div>

                        <div className="featured-games-game-right">
                            <div style={{ fontSize: '20px', paddingLeft: '0.5em' }}>
                                {featuredGame.game_name}
                            </div>
                            <div className="featured-games-game-right-images">
                                <div>
                                    <img onMouseOver={() => setMainImg(featuredGame.game_images[0].image)} style={{ width: '140px', height: '69px' }} src={featuredGame.game_images[0].image} />
                                    <img onMouseOver={() => setMainImg(featuredGame.game_images[1].image)} style={{ width: '140px', height: '69px' }} src={featuredGame.game_images[1].image} />
                                </div>
                                <div>
                                    <img onMouseOver={() => setMainImg(featuredGame.game_images[2].image)} style={{ width: '140px', height: '69px' }} src={featuredGame.game_images[2].image} />
                                    <img onMouseOver={() => setMainImg(featuredGame.game_images[3].image)} style={{ width: '140px', height: '69px' }} src={featuredGame.game_images[3].image} />
                                </div>
                            </div>
                            <div style={{ fontSize: '14px', paddingLeft: '1em', position: 'relative', top: '1em' }}>
                                ${featuredGame.price}
                            </div>
                        </div>
                    </div>

                    <div className="featured-game-arrow-right" onClick={() => handleRightClick()}>
                        <img src='/images/right-arrow.png' />
                    </div>
                </div>
            </div>
            {/* <div className="home-games-list">
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
            </div> */}
        </>
    )
}

export default GetAllGames
