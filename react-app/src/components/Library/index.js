import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom';
import { GetUserLibrary } from '../../store/library';
import RemoveGamesModal from './RemoveGameModal';
import './library.css'
import OpenModalButton from '../OpenModalButton';


const UserLibrary = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const userLibrary = useSelector(state => state.library.userLibrary)
    const userLibraryArr = Object.values(userLibrary)
    const user = useSelector(state => state.session.user)

    const handleClick = (game) => {
        history.push(`/games/${game.game_id}`)
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

    const checkInstall = (game) => {
        if (game.installed) {
            return (
                <>
                    <div onClick={() => history.push('/library/installed')} className='installed-button'>INSTALLED</div>
                </>
            )
        } else {
            return (
                <>
                    <div onClick={() => history.push('/library/uninstalled')} className='installed-button'>NOT INSTALLED</div>
                </>
            )
        }
    }

    if (!user) return null;

    return (
        <>
            <div className='user-page-container'>

                <div className='show-list'>
                    <NavLink to='/library' activeClassName='active-list'>
                        <div>All Games</div>
                    </NavLink>
                    <NavLink to='/library/installed' className='unactive-list'>
                        <div>Installed</div>
                    </NavLink>
                    <NavLink to='/library/uninstalled' className='unactive-list'>
                        <div>Uninstalled</div>
                    </NavLink>
                    <NavLink to='/reviews/user' className='unactive-list'>
                        <div>Reviews</div>
                    </NavLink>
                </div>

                <div style={{ color: 'white', paddingBottom: '1em', borderTop: '1px solid black', width: '52em', paddingTop: '1em' }}>
                    Showing ({userLibraryArr.length}) games
                </div>

                <div className='user-library-page-games'>
                    {userLibraryArr.map((game) => {
                        return (
                            <div key={game.id} className='user-library-page-indiv-game-border'>
                                <div className='user-library-page-indiv-game'>

                                    <div className='indiv-user-game-block'>
                                        <div className='indiv-user-game-left'>
                                            <img onClick={() => handleClick(game)} src={game.game_info.main_img} className='indiv-user-game-gameimg'></img>
                                        </div>
                                        <div className='indiv-user-game-right'>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div style={{ color: '#acb2b8', fontSize: '17px' }}>{game.game_info.game_name}</div>
                                                <div>
                                                    <OpenModalButton
                                                        buttonText="Delete from library"
                                                        modalComponent={<RemoveGamesModal game={game} />}
                                                        className="library-remove-game"
                                                    />
                                                </div>
                                            </div>
                                            <div style={{ color: '#a0a08b', fontSize: '11px', borderBottom: '1px solid black', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Purchased: {formatDate(game.created_at)}</div>
                                                <div>{checkInstall(game)}</div>
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
