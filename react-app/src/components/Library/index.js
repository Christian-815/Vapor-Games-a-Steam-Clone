import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom';
import { GetUserLibrary } from '../../store/library';


const UserLibrary = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const userLibrary = useSelector(state => state.library.userLibrary)
    const userLibraryArr = Object.values(userLibrary)
    const user = useSelector(state => state.session.user)

    const handleClick = (game) => {
        history.push(`/games/${game.id}`)
    }

    useEffect(() => {
        dispatch(GetUserLibrary())
        if (!user) {
            history.push('/');
        }
    }, [dispatch, user]);

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
                    <NavLink to='/library' activeClassName='active-list'>
                        <div>All Games</div>
                    </NavLink>
                    <div to='/library/installed' className='unactive-list'>
                        <div>Installed</div>
                    </div>
                    <div to='/library/uninstalled' className='unactive-list'>
                        <div>Uninstalled</div>
                    </div>
                    <NavLink to='/reviews/user' className='unactive-list'>
                        <div>Reviews</div>
                    </NavLink>
                </div>

                <div className='user-reviews-page-header'>
                    Recent reviews by {user.username}
                </div>
                <div style={{ color: 'white', paddingBottom: '1em', borderTop: '1px solid black', width: '52em', paddingTop: '1em' }}>
                    Showing ({userLibraryArr.length}) games
                </div>
                <div className='user-reviews-page-reviews'>
                    {userLibraryArr.map((game) => {
                        return (
                            <div key={game.id} className='user-reviews-page-indiv-review-border'>
                                <div className='user-reviews-page-indiv-review'>

                                    <div className='indiv-user-review-block'>
                                        <div className='indiv-user-review-left'>
                                            <img src={game.game_img} className='indiv-user-review-gameimg'></img>
                                        </div>
                                        <div onClick={() => handleClick(game)} className='indiv-user-review-right'>
                                            <div style={{ color: '#acb2b8', fontSize: '17px' }}>{game.game_name}</div>
                                            <div style={{ color: '#a0a08b', fontSize: '11px', borderBottom: '1px solid black', paddingBottom: '5px' }}>
                                                <div>Posted: {formatDate(game.created_at)}</div>
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

export default UserLibrary
