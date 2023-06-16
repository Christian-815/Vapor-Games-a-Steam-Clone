import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SearchBar from '../SearchBar';

function Navigation({ isLoaded }) {
	const location = useLocation();
	const history = useHistory();
	const locationArr = location.pathname.split('/');
	const sessionUser = useSelector(state => state.session.user);
	const userCart = useSelector(state => state.cart.userCart);
	const userCartArr = Object.values(userCart);
	const userReviews = useSelector(state => state.reviews.userReviews);
	const userReviewsArr = Object.values(userReviews);
	const allGames = useSelector(state => state.games.allGames);
	const allGamesArr = Object.values(allGames);

	const countUserCart = () => {
		if (!userCartArr.length || !sessionUser) {
			return 0
		} else {
			return userCartArr.length
		}
	};

	const findReviewGameName = (reviewId) => {
		if (userReviewsArr.length) {
			const review = userReviewsArr.find((review) => review.id === reviewId)
			return review.game_name
		}
	};

	const renderUserLocation = () => {
		if (locationArr[3]) {
			return (
				<>
					<div>
						» <NavLink style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }} to='/reviews/user'>Reviews</NavLink> » {findReviewGameName(parseInt(locationArr[3]))}
					</div>
				</>
			)
		}

		if (locationArr[2] === 'user') {
			return (
				<>
					<div>
						» <NavLink style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }} to='/library'>Games</NavLink> » Reviews
					</div>
				</>
			)
		}

		if (locationArr[2] === 'uninstalled') {
			return (
				<>
					<div>
						» <NavLink style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }} to='/library'>Games</NavLink> » Uninstalled
					</div>
				</>
			)
		}

		if (locationArr[2] === 'installed') {
			return (
				<>
					<div>
						» <NavLink style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }} to='/library'>Games</NavLink> » Installed
					</div>
				</>
			)
		}
	};

	const blueNavBarOptions = () => {
		if (sessionUser) {
			return (
				<>
					<button
						className='nav-bar-green-options-buttons'
						onClick={(e) => {
							e.stopPropagation()
							history.push('/')
						}}>
						Your Store
					</button>
					<button
						className='nav-bar-green-options-buttons'
						onClick={(e) => {
							e.stopPropagation()
							history.push('/reviews/user')
						}}>
						Your Reviews
					</button>
					<button onClick={(e) => {
						e.stopPropagation()
						history.push('/library')
					}} className='nav-bar-green-options-buttons'>Your Library</button>
					<button style={{ cursor: 'not-allowed' }} onClick={(e) => e.stopPropagation()} className='nav-bar-green-options-buttons'>Categories</button>
					<button style={{ cursor: 'not-allowed' }} onClick={(e) => e.stopPropagation()} className='nav-bar-green-options-buttons'>News</button>
				</>
			)
		} else {
			return (
				<>
					<button
						className='nav-bar-green-options-buttons'
						onClick={(e) => {
							e.stopPropagation()
							history.push('/')
						}}>
						Store
					</button>
					<button style={{ cursor: 'not-allowed' }} onClick={(e) => e.stopPropagation()} className='nav-bar-green-options-buttons'>New & Noteworthy</button>
					<button style={{ cursor: 'not-allowed' }} onClick={(e) => e.stopPropagation()} className='nav-bar-green-options-buttons'>Categories</button>
					<button style={{ cursor: 'not-allowed' }} onClick={(e) => e.stopPropagation()} className='nav-bar-green-options-buttons'>Points Shop</button>
					<button style={{ cursor: 'not-allowed' }} onClick={(e) => e.stopPropagation()} className='nav-bar-green-options-buttons'>News</button>
				</>
			)
		}
	};

	const findItTakesTwo = () => {
		if (allGamesArr) {
			const itTakesTwo = allGamesArr.find((game) => game.game_name === 'It Takes Two')
			return itTakesTwo.id
		}
	};


	const renderNavBar = () => {
		if (locationArr[1] === '') {
			return (
				<>
					<div className='nav-bar-green'>
						<div className='Nav-bar'>
							<div className='nav-bar-content'>
								<div>
									<NavLink exact to="/" className='homepage-logo'>
										<img alt="icon" src="/images/steam-homelogo.png" className='home-logo' />
										VAPOR GAMES™
									</NavLink>
								</div>
								<div className='homepage-user-navoptions'>
									<div onClick={() => history.push('/')} style={{ cursor: "pointer" }}>STORE</div>
									<a
										href="https://www.linkedin.com/in/christian-oviedo-6a1586242/"
										style={{ textDecoration: 'none', color: '#b8b6b4', display: 'flex', alignItems: 'center', columnGap: '0.2em' }}
										target='_blank'
										rel='noopener noreferrer'>
										LINKEDIN
										<i class="fa-brands fa-linkedin"></i>
									</a>
									<a
										href="https://github.com/Christian-815"
										style={{ textDecoration: 'none', color: '#b8b6b4', display: 'flex', alignItems: 'center', columnGap: '0.2em' }}
										target='_blank'
										rel='noopener noreferrer'>
										GITHUB
										<i class="fa-brands fa-github"></i>
									</a>
									<div style={{ cursor: 'not-allowed' }}>SUPPORT</div>
								</div>
								<div className='homepage-user-interact'>
									<button className='install-steam-button'>
										<div>
											<img alt="icon" src="/images/install-steam-button.png" className='install-logo' />
										</div>
										<div>
											InstallVapor
										</div>
									</button>
									{sessionUser ? (
										<div className='navbar-user-loggedin'>
											<div>
												<ProfileButton user={sessionUser} />
											</div>
											<div>
												<img className='navbar-user-pic' src={sessionUser.profile_pic} />
											</div>
										</div>
									) : (
										<NavLink to='/login' className="login-button">
											login
										</NavLink>
									)}
								</div>
							</div>
						</div>

						<div className='home-banner' onClick={() => history.push(`/games/${findItTakesTwo()}`)}>
							<div className='nav-bar-seperator'>
								<div className='nav-cart-button-div'>
									<button className='nav-cart-button' onClick={(e) => {
										e.stopPropagation()
										history.push('/cart')
									}}>CART ({countUserCart()})</button>
								</div>
								<div className='nav-green-bar'>
									<div className='nav-bar-green-options'>
										{blueNavBarOptions()}
									</div>
									<div onClick={(e) => e.stopPropagation()}>
										<SearchBar />
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)
		} else if (locationArr[1] === 'cart' || locationArr[1] === 'games' || locationArr[1] === 'search') {
			return (
				<>
					<div className='nav-bar-green'>
						<div className='Nav-bar'>
							<div className='nav-bar-content'>
								<div>
									<NavLink exact to="/" className='homepage-logo'>
										<img alt="icon" src="/images/steam-homelogo.png" className='home-logo' />
										VAPOR GAMES™
									</NavLink>
								</div>
								<div className='homepage-user-navoptions'>
									<div onClick={() => history.push('/')} style={{ cursor: "pointer" }}>STORE</div>
									<a
										href="https://www.linkedin.com/in/christian-oviedo-6a1586242/"
										style={{ textDecoration: 'none', color: '#b8b6b4', display: 'flex', alignItems: 'center', columnGap: '0.2em' }}
										target='_blank'
										rel='noopener noreferrer'>
										LINKEDIN
										<i class="fa-brands fa-linkedin"></i>
									</a>
									<a
										href="https://github.com/Christian-815"
										style={{ textDecoration: 'none', color: '#b8b6b4', display: 'flex', alignItems: 'center', columnGap: '0.2em' }}
										target='_blank'
										rel='noopener noreferrer'>
										GITHUB
										<i class="fa-brands fa-github"></i>
									</a>
									<div style={{ cursor: 'not-allowed' }}>SUPPORT</div>
								</div>
								<div className='homepage-user-interact'>
									<button className='install-steam-button'>
										<div>
											<img alt="icon" src="/images/install-steam-button.png" className='install-logo' />
										</div>
										<div>
											InstallVapor
										</div>
									</button>
									{sessionUser ? (
										<div className='navbar-user-loggedin'>
											<div>
												<ProfileButton user={sessionUser} />
											</div>
											<div>
												<img className='navbar-user-pic' src={sessionUser.profile_pic} />
											</div>
										</div>
									) : (
										<NavLink to='/login' className="login-button">
											login
										</NavLink>
									)}
								</div>
							</div>
						</div>

						<div className='nav-bar-seperator'>
							<div className='nav-cart-button-div'>
								<button className='nav-cart-button' onClick={() => history.push('/cart')}>CART ({countUserCart()})</button>
							</div>
							<div className='nav-green-bar'>
								<div className='nav-bar-green-options'>
									{blueNavBarOptions()}
								</div>
								<div onClick={(e) => e.stopPropagation()}>
									<SearchBar />
								</div>
							</div>
						</div>
					</div>
				</>
			)
		} else {
			return (
				<>
					<div className='nav-bar-grey-seperator'>
						<div className='Nav-bar'>
							<div className='nav-bar-content'>
								<div>
									<NavLink exact to="/" className='homepage-logo'>
										<img alt="icon" src="/images/steam-homelogo.png" className='home-logo' />
										VAPOR GAMES™
									</NavLink>
								</div>
								<div className='homepage-user-navoptions'>
									<div onClick={() => history.push('/')} style={{ cursor: "pointer" }}>STORE</div>
									<a
										href="https://www.linkedin.com/in/christian-oviedo-6a1586242/"
										style={{ textDecoration: 'none', color: '#b8b6b4', display: 'flex', alignItems: 'center', columnGap: '0.2em' }}
										target='_blank'
										rel='noopener noreferrer'>
										LINKEDIN
										<i class="fa-brands fa-linkedin"></i>
									</a>
									<a
										href="https://github.com/Christian-815"
										style={{ textDecoration: 'none', color: '#b8b6b4', display: 'flex', alignItems: 'center', columnGap: '0.2em' }}
										target='_blank'
										rel='noopener noreferrer'>
										GITHUB
										<i class="fa-brands fa-github"></i>
									</a>
									<div style={{ cursor: 'not-allowed' }}>SUPPORT</div>
								</div>
								<div className='homepage-user-interact'>
									<button className='install-steam-button'>
										<div>
											<img alt="icon" src="/images/install-steam-button.png" className='install-logo' />
										</div>
										<div>
											InstallVapor
										</div>
									</button>
									{sessionUser ? (
										<div className='navbar-user-loggedin'>
											<div>
												<ProfileButton user={sessionUser} />
											</div>
											<div>
												<img className='navbar-user-pic' src={sessionUser.profile_pic} />
											</div>
										</div>
									) : (
										<NavLink to='/login' className="login-button">
											login
										</NavLink>
									)}
								</div>
							</div>
						</div>

						<div>
							{sessionUser ? (
								<div className='nav-bar-grey'>
									<div>
										<img style={{ width: '4em', height: '4em' }} src={sessionUser.profile_pic} />
									</div>
									<div style={{ fontSize: '26px' }}>
										{sessionUser.username}
									</div>
									<div style={{ fontSize: '12px' }}>
										{renderUserLocation()}
									</div>

								</div>
							) : null}
						</div>
					</div>
				</>
			)
		}
	};

	return (
		<>
			{renderNavBar()}
		</>
	);
}

export default Navigation;
