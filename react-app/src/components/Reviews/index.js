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
                                <img className="leave-review-user-pic" src="https://avatars.cloudflare.steamstatic.com/7bbb0056e9a11c2918151721e3f453edb050d51f_full.jpg" />
                            </div>
                            <div className="leave-review-block-right">
                                <textarea
                                    type="textbox"
                                    rows="10"
                                    className="leave-review-text-block"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                <div className="leave-review-user-interact-buttons">
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
            return (
                <>
                    <div className="leave-review-div">
                        <div className="leave-review-header">You reviewed this game on {formatDate(checkReviewsList().created_at)}.</div>
                        <div className="viewyour-review-div">
                            <NavLink to='/' className="viewyour-review-button">
                                View your review
                            </NavLink>
                        </div>
                        <div className="viewreview-block">
                            <div className="viewreview-block-left">
                                <span><i class="thumb_icons thumb_up"></i></span>
                            </div>
                            <div className="viewreview-block-right">
                                You can edit this review and change your rating if you wish.
                                <NavLink to='/' className='viewreview-navlink'>
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

        const payload = {
            description: review,
            recommended
        }

        await dispatch(createGameReview(game_id, payload))

        setReview('')
        setRecommended(null)
    }

    // if (!gameReviews) return null;

    return (
        <div>
            {renderReviewBlock()}
            <div className="game-reviews-list">
                <div>
                    <div>
                        <h4>CUSTOMER REVIEWS</h4>
                        <div>
                            Overall Reviews:
                            rating placeholder (#reviews)
                        </div>
                    </div>
                    {gameReviewsArr.map((review) => {
                        return (
                            <div key={review.id}>
                                <div>
                                    <img src={review.reviewer_profile_pic} alt="user picture" />
                                    {review.reviewer_username}
                                </div>
                                <div>
                                    {review.description}
                                    {/* {review.created_at} */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GameReviews
