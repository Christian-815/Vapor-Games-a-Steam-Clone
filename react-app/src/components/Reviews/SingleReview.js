import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const SingleReview = () => {
    const dispatch = useDispatch();
    const { review_id } = useParams()

    const userReviews = useSelector(state => state.reviews.userReviews)
    const userReviewsArr = Object.values(userReviews)
    const review = userReviewsArr.find(review => review.id === parseInt(review_id))
    console.log(review)

    if (!userReviewsArr.length) return null;

    return (
        <>
            <div className='indiv-user-review-page'>

                <div className='indiv-user-review-page-left'>
                    <div>{review.recommended}</div>
                    <div>
                        <div>{review.created_at}</div>
                        <div>{review.update_at}</div>
                    </div>
                    <div>{review.description}</div>
                </div>

                <div className='indiv-user-review-page-right'>
                    <div>
                        <img src={review.game_img} className='indiv-user-review-page-gameimg'></img>
                    </div>
                    <div className='indiv-user-review-page-owner-controls'>
                        <div className='OWNER-CONTROLS'>OWNER CONTROLS</div>
                        <div className='indiv-user-review-page-owner-options'>edit review</div>
                        <div className='indiv-user-review-page-owner-options'>delete review</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SingleReview
