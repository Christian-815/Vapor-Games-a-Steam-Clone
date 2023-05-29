import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { getAllGames, getOneGame } from "../../store/games";
import AddToUserCart from "../Cart/AddToCart";
import GameReviews from "../Reviews";
import './singleGame.css'
import { getGameReviews } from "../../store/reviews";

const GetOneGame = () => {
    const dispatch = useDispatch();
    const { game_id } = useParams();
    const [mainImg, setMainImg] = useState(null)
    const game = useSelector(state => state.games.allGames[game_id])
    const gameReviews = useSelector(state=> state.reviews.gameReviews)
    const gameReviewsArr = Object.values(gameReviews)
    // console.log(game)

    useEffect(() => {
        dispatch(getOneGame(game_id))
        dispatch(getAllGames())
        dispatch(getGameReviews(game_id))
    }, [dispatch, mainImg])

    function formatDate(date) {
        const dateObj = new Date(date);
        const options = { month: "long", day: "numeric", year: "numeric" };
        return dateObj.toLocaleDateString("en-US", options);
    }

    const getReviewAvg = (gameReviewsArr) => {
        if (gameReviewsArr) {
            let good = 0;
            let bad = 0;
            const greatAvg = gameReviewsArr.length * 0.8
            const goodAvg = gameReviewsArr.length * 0.6
            const badAvg = gameReviewsArr.length * 0.4

            gameReviewsArr.forEach(review => {
                if (review.recommended === true) good += 1
                if (review.recommended === false) bad += 1
            })

            if (good >= greatAvg) {
                return (
                    <>
                        <div style={{ color: '#4CA3C5', fontSize: '13px' }}>Very Positive ({gameReviewsArr.length})</div>
                    </>
                )
            } else if (good >= goodAvg) {
                return (
                    <>
                        <div style={{ color: '#4CA3C5', fontSize: '13px' }}>Mostly Positive ({gameReviewsArr.length})</div>
                    </>
                )
            } else if (bad <= badAvg) {
                return (
                    <>
                        <div style={{ color: '#673017', fontSize: '13px'}}>Mostly Negative ({gameReviewsArr.length})</div>
                    </>
                )
            } else {
                return (
                    <>
                        <div style={{ color: '#907B6F', fontSize: '13px' }}>Mixed ({gameReviewsArr.length})</div>
                    </>
                )
            }
        }
    }

    const setActiveClass = (image) => {
        if (image === mainImg) {
            return 'game-scroll-images active'
        } else {
            return 'game-scroll-images'
        }
    }

    if (!game) return null;

    return (
        <div className="single-game-page-container">
            <h1 style={{ color: 'white', paddingRight: '15.5em' }}>{game.game_name}</h1>
            <div className="single-game-banner">
                <div>
                    <div>
                        {mainImg ? <img src={mainImg} />
                        :
                        <img src={game.game_images[0].image} />}
                    </div>
                    <div className="single-game-scroll-images">
                        {game.game_images.map((image) => {
                            return (
                                <div>
                                    <img className={setActiveClass(image.image)} src={image.image} onClick={() => setMainImg(image.image)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="single-game-banner-right">
                    <div>
                        <img className="single-game-banner-right-img" src={game.main_img} />
                    </div>
                    <div style={{ color: '#c6d4df', fontSize: '13px' }}>
                        {game.intro_description}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1em'}}>
                        <div style={{ display: 'flex', columnGap: '2.5em', alignItems: 'center' }}>
                            <div style={{ fontSize: '11px', color: '#415567' }}>ALL REVIEWS:</div>
                            {getReviewAvg(gameReviewsArr)}
                        </div>
                        <div style={{ display: 'flex', columnGap: '2em', alignItems: 'center' }}>
                            <div style={{ fontSize: '11px', color: '#415567' }}>
                                RELEASE DATE:
                            </div>
                            <div style={{ color: '#8F9885', fontSize: '13px'}}>
                                {formatDate(game.release_date)}
                            </div>
                        </div>
                        <div style={{ display: 'flex', columnGap: '3em', alignItems: 'center' }}>
                            <div style={{ fontSize: '11px', color: '#415567' }}>
                                DEVELOPER:
                            </div>
                            <div style={{ color: '#4CA3C5', fontSize: '13px' }}>
                                {game.developer}
                            </div>
                        </div>
                        <div style={{ display: 'flex', columnGap: '3.3em', alignItems: 'center' }}>
                            <div style={{ fontSize: '11px', color: '#415567' }}>
                                PUBLISHER:
                            </div>
                            <div style={{ color: '#4CA3C5', fontSize: '13px' }}>
                                {game.publisher}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ paddingRight: '17em'}}>
                <div className="single-game-purchase-div">
                    <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                        Buy {game.game_name}
                    </div>
                    <div>
                        <div style={{ position: 'relative', right: '-8em', top: '1.3em'}}>
                            <img src='https://store.cloudflare.steamstatic.com/public/images/v6/icon_platform_win.png?v=3'></img>
                        </div>
                        <div className="add-to-cart-div">
                            <div>
                                ${game.price}
                            </div>
                            <div>
                                <AddToUserCart />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ color: 'white', marginTop: '4em', borderBottom: '1px solid #396C88', paddingBottom: '0.3em', fontSize: '15px' }}>
                    ABOUT THIS GAME
                </div>
                <div style={{ width: '40em', color: '#acb2b8', marginTop: '1em', fontSize: '15px' }}>
                    {game.full_description}
                </div>
                <div style={{ marginTop: '1em'}}>
                    <div>
                        <img src={game.game_images[0].image} />
                    </div>
                    <div>
                        <img src={game.game_images[1].image} />
                    </div>
                </div>
            </div>


            <div>
                <GameReviews />
            </div>
        </div>
    )
}

export default GetOneGame
