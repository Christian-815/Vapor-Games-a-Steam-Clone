import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom';


const UserReviews = () => {
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

    if (!user) return null;

    return (
        <>
            <div className='user-page-container'>

                <div className='show-list'>
                    <NavLink to='/library' className='unactive-list'>
                        <div>All Games</div>
                    </NavLink>
                    <NavLink to='/library/installed' className='unactive-list'>
                        <div>Installed</div>
                    </NavLink>
                    <NavLink to='/library/uninstalled' className='unactive-list'>
                        <div>Uninstalled</div>
                    </NavLink>
                    <NavLink to='/reviews/user' activeClassName='active-list'>
                        <div>Reviews</div>
                    </NavLink>
                </div>

                <div className='user-reviews-page-header'>
                    Recent reviews by {user.username}
                </div>
                <div style={{ color: 'white', paddingBottom: '1em', borderTop: '1px solid black', width: '52em', paddingTop: '1em'}}>
                    Showing ({userReviewsArr.length}) reviews
                </div>
                <div className='user-reviews-page-reviews'>
                    {userReviewsArr.map((review) => {
                        return (
                            <div key={review.id} className='user-reviews-page-indiv-review-border'>
                                <div className='user-reviews-page-indiv-review'>

                                    <div className='indiv-user-review-block'>
                                        <div className='indiv-user-review-left'>
                                            <img src={review.game_img} className='indiv-user-review-gameimg'></img>
                                        </div>
                                        <div onClick={() => handleClick(review)} className='indiv-user-review-right'>
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
                                            <div style={{ color: '#acb2b8', fontSize: '17px' }}>{review.description}</div>
                                            <div style={{ color: '#a0a08b', fontSize: '11px', borderBottom: '1px solid black', paddingBottom: '5px' }}>
                                                <div>Posted: {formatDate(review.created_at)}</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default UserReviews
