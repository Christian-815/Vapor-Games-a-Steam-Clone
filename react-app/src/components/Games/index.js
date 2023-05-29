import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import { getAllGames } from "../../store/games";
import { NavLink, useHistory } from "react-router-dom";
import './games.css'

const GetAllGames = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allGames = useSelector(state => state.games.allGames)
    const allGamesArr = Object.values(allGames)
    const user = useSelector(state => state.session.user)
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

    const scrollBarActive = () => {

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

                    <div className="featured-games-game" onClick={() => history.push(`/games/${gamesKey}`)}>
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
                <div style={{ display: 'flex', columnGap: '0.3em', justifyContent: 'center', marginTop: '1em' }}>
                    <div className={`featured-game-scroll-bar ${gamesKey === 1 ? 'active' : ''}`}></div>
                    <div className={`featured-game-scroll-bar ${gamesKey === 2 ? 'active' : ''}`}></div>
                    <div className={`featured-game-scroll-bar ${gamesKey === 3 ? 'active' : ''}`}></div>
                    <div className={`featured-game-scroll-bar ${gamesKey === 4 ? 'active' : ''}`}></div>
                    <div className={`featured-game-scroll-bar ${gamesKey === 5 ? 'active' : ''}`}></div>
                    <div className={`featured-game-scroll-bar ${gamesKey === 6 ? 'active' : ''}`}></div>
                    <div className={`featured-game-scroll-bar ${gamesKey === 7 ? 'active' : ''}`}></div>
                    <div className={`featured-game-scroll-bar ${gamesKey === 8 ? 'active' : ''}`}></div>
                    <div className={`featured-game-scroll-bar ${gamesKey === 9 ? 'active' : ''}`}></div>
                    <div className={`featured-game-scroll-bar ${gamesKey === 10 ? 'active' : ''}`}></div>
                </div>
            </div>
            <div className="home-games-list">
                {allGamesArr.map((game) => {
                    return (
                        <div key={game.id}>
                            <div>
                            </div>
                            <NavLink to={`/games/${game.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                <div className="home-page-indiv-game-block">
                                    <div>
                                        <img style={{ width: '10em', height: '100%' }} src={game.main_img} />
                                    </div>
                                    <div style={{ flex: '2', paddingTop: '0.5em' }}>
                                        {game.game_name}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', paddingRight: '2em' }}>
                                        ${game.price}
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
            {user ? null :
                <div className="home-page-footer">
                    <div className="login-page-footer-info">
                        <div>
                            Join Vapor Games and discover
                        </div>
                        <div>
                            thousands of games to play.
                        </div>
                        <div>
                            <NavLink to='/signup' className="signup-text">
                                Join Vapor Games
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <img style={{ maxWidth: '200px' }} src='https://store.cloudflare.steamstatic.com/public/shared/images/login/join_pc.png?v=1' />
                    </div>
                    <div className="login-page-footer-info">
                        <div>
                            <NavLink to='/signup' className="signup-footer-button">
                                Join Vapor Games
                            </NavLink>
                        </div>
                        <div style={{ marginTop: '1em' }}>It's free and easy to use.</div>
                    </div>
                </div>
            }
        </>
    )
}

export default GetAllGames
