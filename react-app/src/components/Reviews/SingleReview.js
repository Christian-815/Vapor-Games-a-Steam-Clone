import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import { getUserReviews, updateUserReview } from '../../store/reviews';
import DeleteReview from '../../DeleteReviewModal';


const SingleReview = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { review_id } = useParams();

    const userReviews = useSelector(state => state.reviews.userReviews);
    const userReviewsArr = Object.values(userReviews);
    const review = userReviewsArr.find(review => review.id === parseInt(review_id));
    const user = useSelector(state => state.session.user);

    const [recommended, setRecommended] = useState();
    const [description, setDescription] = useState();
    const [showEdit, setShowEdit] = useState(false);
    const [errors, setErrors] = useState('');


    useEffect(() => { }, [dispatch, userReviews]);

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

        let allErrors = {}

        if (description.length < 3 || description.length > 255) allErrors.description = 'Review must be between 3 and 255 characters'
        if (recommended !== true && recommended !== false) allErrors.recommended = 'You must recommend the game with either a thumbs up or a thumbs down.'

        if (Object.keys(allErrors).length) {
            return setErrors(allErrors)
        }

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

    const checkRecommeneded = (recommended) => {
        console.log('in here')
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

    const renderReviewBlock = () => {
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
                                {errors.description ? <p className='reviews-errors'>{errors.description}</p> : null}
                                <div className="leave-review-user-interact-buttons">
                                    {errors.recommended ? <p className='reviews-errors'>{errors.recommended}</p> : null}
                                    {hanleRecommendedButtons()}
                                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.2em', paddingTop: '1em' }}>
                                        <div>
                                            <button className="update-review-button" onClick={handleCancelClick}>Cancel</button>
                                        </div>
                                        <div>
                                            <button className="update-review-button" onClick={handleSubmitClick}>Save Changes</button>
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
                    <div className='indiv-user-review-page-left-review'>
                        <div className='user-review-details'>
                            <div className='user-review-details-seperator'>
                                Review
                            </div>
                            <div className='user-review-details-recommended'>
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
                            <div style={{ color: '#a0a08b', fontSize: '11px'}}>
                                <div>Posted: {formatDate(review.created_at)}</div>
                            </div>
                            <div style={{ color: '#acb2b8', fontSize: '17px' }}>{review.description}</div>
                        </div>
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
                    <div style={{ cursor: 'pointer'}}>
                        <img onClick={() => history.push(`/games/${review.game_id}`)} src={review.game_img} className='indiv-user-review-page-gameimg'></img>
                    </div>
                    <div className='indiv-user-review-page-owner-controls'>
                        <div className='OWNER-CONTROLS'>OWNER CONTROLS</div>
                        <div className='indiv-user-review-page-owner-options' onClick={handleEditClick}>
                            <img src='https://community.cloudflare.steamstatic.com/public/images//sharedfiles/icons/icon_edit.png' /> Edit Review
                        </div>
                        <div className='indiv-user-review-page-owner-options' style= {{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img src='https://community.cloudflare.steamstatic.com/public/images//sharedfiles/icons/icon_delete.png' />
                            <OpenModalButton
                                buttonText="Delete"
                                modalComponent={<DeleteReview reviewId={review.id} gameId={review.game_id} />}
                                className='delete-review-button'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SingleReview
