import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { getGameReviews, createGameReview, getUserReviews } from "../../store/reviews";
import './reviews.css'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const GameReviews = () => {
    const dispatch = useDispatch()
    const { game_id } = useParams();
    const [review, setReview] = useState('')
    const [recommended, setRecommended] = useState(null)
    const [errors, setErrors] = useState('');

    const gameReviews = useSelector(state => state.reviews.gameReviews)
    const gameReviewsArr = Object.values(gameReviews)
    const singleGame = useSelector(state => state.games.allGames[game_id])
    const newReview = useSelector(state => state.reviews.newReview)
    const user = useSelector(state => state.session.user)
    // console.log(gameReviews)

    useEffect(async () => {
        await dispatch(getGameReviews(game_id))
        // await dispatch(getUserReviews(user.id))
    }, [dispatch, newReview])


    const handleYesRecommended = (e) => {
        e.preventDefault()
        setRecommended(true)
    };

    const handleNoRecommended = (e) => {
        e.preventDefault()
        setRecommended(false)
    };

    const hanleRecommendedButtons = () => {
        if (recommended) {
            return (
                <div className="leave-review-recommended-div">
                    <div className="do-you-recommmend">Do you recommend this game?</div>
                    <div className="recommend-buttons">
                        <button className="recommended-button active">
                            <span><i class="thumb_icons thumb_up_yes"></i> Yes</span>
                        </button>
                        <button className="recommended-button" onClick={handleNoRecommended}>
                            <span><i class="thumb_icons thumb_down"></i> No</span>
                        </button>
                    </div>
                </div>
            )
        } else if (recommended === false) {
            return (
                <div className="leave-review-recommended-div">
                    <div className="do-you-recommmend">Do you recommend this game?</div>
                    <div className="recommend-buttons">
                        <button className="recommended-button" onClick={handleYesRecommended}>
                            <span><i class="thumb_icons thumb_up"></i> Yes</span>
                        </button>
                        <button className="recommended-button active">
                            <span><i class="thumb_icons thumb_down_yes"></i> No</span>
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="leave-review-recommended-div">
                    <div className="do-you-recommmend">Do you recommend this game?</div>
                    <div className="recommend-buttons">
                        <button className="recommended-button" onClick={handleYesRecommended}>
                            <span><i class="thumb_icons thumb_up"></i> Yes</span>
                        </button>
                        <button className="recommended-button" onClick={handleNoRecommended}>
                            <span><i class="thumb_icons thumb_down"></i> No</span>
                        </button>
                    </div>
                </div>
            )
        }
    }

    const checkReviewsList = () => {
        const userReview =  gameReviewsArr.find(review => review.reviewer_id === user.id)
        return userReview
    }

    function formatDate(created_at) {
        const dateObj = new Date(created_at);
        const options = { month: "long", day: "numeric", year: "numeric" };
        return dateObj.toLocaleDateString("en-US", options);
    }

    const renderReviewBlock = () => {
        if (user && !checkReviewsList()) {
            return (
                <>
                    <div className="leave-review-div">
                        <div className="leave-review-header">Write a review for {singleGame.game_name}</div>
                        <div className="leave-review-message">
                            <div>Please describe what you liked or disliked about this game and whether you recommend it to others.</div>
                            <div>Please remember to be polite and follow the Rules and Guidelines.</div>
                        </div>
                        <div className="leave-review-block">
                            <div className="leave-review-block-left">
                                <img className="leave-review-user-pic" src={user.profile_pic} />
                            </div>
                            <div className="leave-review-block-right">
                                <textarea
                                    type="textbox"
                                    rows="10"
                                    className="leave-review-text-block"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                {errors.review ? <p className='new-review-errors'>{errors.review}</p> : null}
                                <div className="leave-review-user-interact-buttons">
                                    {errors.recommended ? <p className='new-recommended-errors'>{errors.recommended}</p> : null}
                                    {hanleRecommendedButtons()}
                                    <div>
                                        <button onClick={handleReviewPost} className="post-review-button">Post review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else if (user && checkReviewsList()) {
            dispatch(getUserReviews(user.id))
            const usersReview = checkReviewsList()
            return (
                <>
                    <div className="leave-review-div">
                        <div className="leave-review-header">You reviewed this game on {formatDate(usersReview.created_at)}.</div>
                        <div className="viewyour-review-div">
                            <NavLink to={`/reviews/userreview/${usersReview.id}`} className="viewyour-review-button">
                                View your review
                            </NavLink>
                        </div>
                        <div className="viewreview-block">
                            <div className="viewreview-block-left">
                                <span><i class="thumb_icons thumb_up"></i></span>
                            </div>
                            <div className="viewreview-block-right">
                                You can edit this review and change your rating if you wish.
                                <NavLink to={`/reviews/userreview/${usersReview.id}`} className='viewreview-navlink'>
                                    View your review
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return null;
        }
    }

    const handleReviewPost = async (e) => {
        e.preventDefault()

        let allErrors = {}

        if (review.length < 3 || review.length > 255) allErrors.review = 'Review must be between 3 and 255 characters'
        if (recommended !== true && recommended !== false) allErrors.recommended = 'You must recommend the game with either a thumbs up or a thumbs down.'

        if (Object.keys(allErrors).length) {
            return setErrors(allErrors)
        }

        const payload = {
            description: review,
            recommended
        }

        await dispatch(createGameReview(game_id, payload))

        setReview('')
        setRecommended(null)
    }

    const getReviewAvg = (gameReviewsArr) => {
        if (gameReviewsArr) {
            let good = 0;
            let bad = 0;
            const greaterThan80 = gameReviewsArr.length * 0.8
            const greaterThan60 = gameReviewsArr.length * 0.6

            gameReviewsArr.forEach(review => {
                if (review.recommended === true) {
                    good += 1
                } else {
                    bad += 1
                }
            })

            if (good >= greaterThan80) {
                return (
                    <>
                        <div style={{ color: '#4CA3C5', fontSize: '13px' }}>Very Positive ({gameReviewsArr.length})</div>
                    </>
                )
            } else if (good >= greaterThan60) {
                return (
                    <>
                        <div style={{ color: '#4CA3C5', fontSize: '13px' }}>Mostly Positive ({gameReviewsArr.length})</div>
                    </>
                )
            } else if (bad >= greaterThan60) {
                return (
                    <>
                        <div style={{ color: '#673017', fontSize: '13px' }}>Mostly Negative ({gameReviewsArr.length})</div>
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

    const checkRecommeneded = (recommended) => {
        // console.log('in here')
        if (recommended) {
            return (
                <>
                    <span><i class="thumb_icons thumb_up"></i></span>
                </>
            )
        } else {
            return (
                <>
                    <span><i class="thumb_icons thumb_down"></i></span>
                </>
            )
        }
    }

    function formatDate(created_at) {
        const dateObj = new Date(created_at);
        const options = { month: "long", day: "numeric", year: "numeric" };
        return dateObj.toLocaleDateString("en-US", options);
    }

    // if (!gameReviews) return null;

    return (
        <div>
            {renderReviewBlock()}
            <div className="game-reviews-list">
                <div>
                    <div>
                        <h4 style={{ color: 'white'}}>
                            CUSTOMER REVIEWS
                        </h4>
                        <div className="game-reviews-list-header">
                            <div>
                                Overall Reviews:
                            </div>
                            <div>
                                {getReviewAvg(gameReviewsArr)}
                            </div>
                        </div>
                    </div>
                    <div className="game-reviews-list-all">
                        {gameReviewsArr.map((review) => {
                            return (
                                <div key={review.id} className="users-reviews-div">
                                    <div style={{ display: 'flex', columnGap: '0.5em'}}>
                                        <img src={review.reviewer_profile_pic} alt="user picture" className="leave-review-user-pic" />
                                        <div style={{ color: 'white' }}>
                                            {review.reviewer_username}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '592px'}}>
                                        <div className='user-reviews-indiv-details-recommended'>
                                            <div style={{ display: 'flex', columnGap: '1em' }}>
                                                <div>
                                                    {checkRecommeneded(review.recommended)}
                                                </div>
                                                <div>
                                                    {review.recommended ?
                                                        <>
                                                            Recommended
                                                        </> :
                                                        <>
                                                            Not Recommened
                                                        </>}
                                                </div>
                                            </div>
                                            <div className='user-review-details-icon'>
                                                <img src='https://community.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_review_steam.png' />
                                            </div>
                                        </div>
                                        <div style={{ color: '#acb2b8', marginBottom: '1em' }}>
                                            <div style={{ color: '#8091a2', fontSize: '11px', marginBottom: '3em' }}>
                                                POSTED: {formatDate(review.created_at)}
                                            </div>
                                            <div>{review.description}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameReviews
