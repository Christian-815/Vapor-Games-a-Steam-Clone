import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSearchResultGames } from "../../store/games";
import { NavLink } from 'react-router-dom';
// import './searchResults.css'


const SearchResults = () => {

    const { search_terms } = useParams()

    // console.log("fdfdsfdfasfdf", search_terms);

    const dispatch = useDispatch()

    const searchResultGames = Object.values(useSelector(state => state.games.searchedGames))

    useEffect(async () => {
        await dispatch(getSearchResultGames(search_terms))
    }, [dispatch, search_terms])

    // if(!Object.keys(searchResultGames).length){
    //     return(
    //         <i className="fa-solid fa-truck-ramp-box spot-info-loading">LOADING...</i>
    //     )
    // }

    return (
        <>
            <div className="search-results-container">
                <h1 className="search-results-header">Search for "{`${search_terms}`}"</h1>


                {searchResultGames.length === 0 &&
                    <div className="no-search-results-container">
                        <h2 className="no-search-results">Sorry, your search came up empty!</h2>
                    </div>
                }

                {searchResultGames.map(game => {
                    return (
                        <div key={game.id}>
                            <NavLink to={`/games/${game.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                <div className="search-game-block">
                                    <div>
                                        <img style={{ width: '10em', height: '100%' }} src={game.main_img} />
                                    </div>
                                    <div style={{ flex: '2', paddingTop: '0.5em' }}>
                                        {game.game_name}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', paddingRight: '2em' }}>
                                        ${game.price}
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )
                })
                }
            </div>
        </>


    )
}


export default SearchResults
