import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom';
import { GetUserLibrary, updateGameInstall } from '../../store/library';
import './library.css'


const UserUninstalledGames = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const userLibrary = useSelector(state => state.library.userLibrary)
    const userLibraryArr = Object.values(userLibrary)
    const userGamesUninstalled = userLibraryArr.filter(game => game.installed === false)
    // console.log(userGamesInstalled)
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

    const handleDownload = async (game) => {
        await dispatch(updateGameInstall(game))
        history.push('/library/installed')
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
                    <NavLink to='/library/uninstalled' activeClassName='active-list'>
                        <div>Uninstalled</div>
                    </NavLink>
                    <NavLink to='/reviews/user' className='unactive-list'>
                        <div>Reviews</div>
                    </NavLink>
                </div>

                <div style={{ color: 'white', paddingBottom: '1em', borderTop: '1px solid black', width: '52em', paddingTop: '1em' }}>
                    Showing ({userGamesUninstalled.length}) not installed games
                </div>

                <div className='user-library-page-games'>
                    {userGamesUninstalled.map((game) => {
                        return (
                            <div key={game.id} className='user-library-page-indiv-game-border'>
                                <div className='user-library-page-indiv-game'>

                                    <div className='indiv-user-game-block'>
                                        <div className='indiv-user-game-left'>
                                            <img onClick={() => handleClick(game)} src={game.game_info.main_img} className='indiv-user-game-gameimg'></img>
                                        </div>
                                        <div className='indiv-user-game-right'>
                                            <div style={{ color: '#acb2b8', fontSize: '17px' }}>{game.game_info.game_name}</div>
                                            <div style={{ color: '#a0a08b', fontSize: '11px', borderBottom: '1px solid black', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Purchased: {formatDate(game.created_at)}</div>
                                                <div onClick={() => handleDownload(game.game_info)} className='download-uninstall-button'>
                                                    <img alt="icon" src="/images/install-steam-button.png" className='install-logo' /> DOWNLOAD
                                                </div>
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

export default UserUninstalledGames
