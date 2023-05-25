import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const location = useLocation()
	const history = useHistory()
	const locationArr = location.pathname.split('/')
	const sessionUser = useSelector(state => state.session.user);
	const userCart = useSelector(state => state.cart.userCart);
	const userCartArr = Object.values(userCart)
	// console.log(userCartArr.length)

	const countUserCart = () => {
		if (userCartArr.length) {
			return userCartArr.length
		} else {
			return 0
		}
	}


	const renderNavBar = () => {
		if (locationArr[1] === '' || locationArr[1] === 'cart' || locationArr[1] === 'games') {
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
									<div>COMMUNITY</div>
									<div>ABOUT</div>
									<div>SUPPORT</div>
								</div>
								<div className='homepage-user-interact'>
									<button className='install-steam-button'>
										<div>
											<img alt="icon" src="/images/install-steam-button.png" className='install-logo' />
										</div>
										<div>
											InstallSteam
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
									<button className='nav-bar-green-options-buttons'>Your Store</button>
									<button className='nav-bar-green-options-buttons'>News & Noteworthy</button>
									<button className='nav-bar-green-options-buttons'>Categories</button>
									<button className='nav-bar-green-options-buttons'>Points Shop</button>
									<button className='nav-bar-green-options-buttons'>News</button>
								</div>
								<div>
									<div>Search Bar</div>
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
									<div>COMMUNITY</div>
									<div>ABOUT</div>
									<div>SUPPORT</div>
								</div>
								<div className='homepage-user-interact'>
									<button className='install-steam-button'>
										<div>
											<img alt="icon" src="/images/install-steam-button.png" className='install-logo' />
										</div>
										<div>
											InstallSteam
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

						<div className='nav-bar-grey'>
							<h1>
								{sessionUser.username}
							</h1>
						</div>
					</div>
				</>
			)
		}
	}

	return (
		<>
			{renderNavBar()}
		</>
	);
}

export default Navigation;
