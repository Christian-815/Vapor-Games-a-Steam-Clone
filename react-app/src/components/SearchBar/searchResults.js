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
            <h1 className="search-results-header">Search Results for "{`${search_terms}`}"</h1>
            <div className='all-products-container'>


                {searchResultGames.length === 0 &&
                    <div className="no-search-results-container">
                        <h2 className="no-search-results">Sorry, your search came up empty!</h2>
                    </div>
                }
                {searchResultGames.map(game => {
                    return (
                        <div key={game.id} className='all-games-card'>
                            <NavLink to={`/games/${game.id}`} className='all-games-image-container'>
                                <img
                                    src={game.main_img}
                                    alt={`${game.game_name}'s image unavaiable`}
                                    className='all-games-image'
                                >
                                </img>
                                <div class="all-games-price-container">
                                    <div className='all-games-price'>
                                        ${`${game.price.toFixed(2)}`}
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
