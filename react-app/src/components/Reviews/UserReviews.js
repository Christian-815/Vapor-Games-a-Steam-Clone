import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserReviews } from '../../store/reviews';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const UserReviews = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const userReviews = useSelector(state => state.reviews.userReviews)
    const userReviewsArr = Object.values(userReviews)
    const user = useSelector(state => state.session.user)

    const handleClick = (review) => {
        history.push(`/reviews/userreview/${review.id}`)
    }

    useEffect(() => {
        if (!user) {
            history.push('/');
        }
    }, [user]);

    if (!user) return null;

    return (
        <>
            <div>
                Recent reviews by {user.username}
            </div>
            {userReviewsArr.map((review) => {
                return (
                    <div key={review.id}>

                        <div className='indiv-user-review-block'>
                            <div className='indiv-user-review-left'>
                                <img src={review.game_img} className='indiv-user-review-gameimg'></img>
                            </div>
                            <div onClick={() => handleClick(review)} className='indiv-user-review-right'>
                                <div>{review.recommended}</div>
                                <div>{review.description}</div>
                                <div>Posted {review.created_at}. Last edited {review.update_at}</div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default UserReviews
