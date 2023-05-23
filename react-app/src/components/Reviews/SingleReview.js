import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import OpenModalButton from '../OpenModalButton';
import { getUserReviews, updateUserReview } from '../../store/reviews';
import DeleteReview from '../../DeleteReviewModal';


const SingleReview = () => {
    const dispatch = useDispatch();
    const { review_id } = useParams();

    const userReviews = useSelector(state => state.reviews.userReviews);
    const userReviewsArr = Object.values(userReviews);
    const review = userReviewsArr.find(review => review.id === parseInt(review_id));
    const user = useSelector(state => state.session.user);

    const [recommended, setRecommended] = useState();
    const [description, setDescription] = useState();
    const [showEdit, setShowEdit] = useState(false);
    console.log(review, recommended, description);

    useEffect(() => {}, [dispatch, userReviews]);

    if (!userReviewsArr.length) return null;



    const handleEditClick = () => {
        setRecommended(review.recommended)
        setDescription(review.description)
        if (!showEdit) {
            return setShowEdit(true)
        }
    }

    const handleSubmitClick = async (e) => {
        e.preventDefault()

        const payload = {
            recommended,
            description
        }

        await dispatch(updateUserReview(review.id, payload))
        await dispatch(getUserReviews(user.id))
        setShowEdit(false)
    }

    const handleCancelClick = () => {
        return setShowEdit(false)
    }

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

    const renderReviewBlock  = () => {
        if (showEdit) {
            return (
                <>
                    <div className="indiv-user-review-page-left">
                        <div className="leave-review-block">
                            <div className="leave-review-block-right">
                                <textarea
                                    type="textbox"
                                    rows="10"
                                    className="leave-review-text-block"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <div className="leave-review-user-interact-buttons">
                                    {hanleRecommendedButtons()}
                                    <div>
                                        <div>
                                            <button onClick={handleCancelClick}>Cancel</button>
                                        </div>
                                        <div>
                                            <button className="post-review-button" onClick={handleSubmitClick}>Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='indiv-user-review-page-left'>
                        <div>{review.recommended}</div>
                        <div>
                            <div>{review.created_at}</div>
                            <div>{review.update_at}</div>
                        </div>
                        <div>{review.description}</div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className='indiv-user-review-page'>

                {renderReviewBlock()}

                <div className='indiv-user-review-page-right'>
                    <div>
                        <img src={review.game_img} className='indiv-user-review-page-gameimg'></img>
                    </div>
                    <div className='indiv-user-review-page-owner-controls'>
                        <div className='OWNER-CONTROLS'>OWNER CONTROLS</div>
                        <div className='indiv-user-review-page-owner-options' onClick={handleEditClick}>
                            <img src='https://community.cloudflare.steamstatic.com/public/images//sharedfiles/icons/icon_edit.png' /> Edit Review
                        </div>
                        <div className='indiv-user-review-page-owner-options'>
                            <img src='https://community.cloudflare.steamstatic.com/public/images//sharedfiles/icons/icon_delete.png' />
                            <OpenModalButton
                                buttonText="Delete"
                                modalComponent={<DeleteReview reviewId={review.id} gameId={review.game_id} />}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SingleReview
