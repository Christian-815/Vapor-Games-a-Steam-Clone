import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='Nav-bar'>
			<div className='nav-bar-content'>
				<div>
					<NavLink exact to="/" activeClassName='homepage-logo'>
						<img alt="icon" src="/images/steam-homelogo.png" className='home-logo' />
						VAPOR GAMES™
					</NavLink>
				</div>
				<div className='homepage-user-navoptions'>
					<div>STORE</div>
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
							Install Steam
						</div>
					</button>
					{sessionUser ? (
						<div>
							<ProfileButton user={sessionUser} />
						</div>
					) : (
						<NavLink to='/login' className="login-button">
							login
						</NavLink>
					)}
				</div>
			</div>
			{/* {sessionUser ? (
				<div>
					<ProfileButton user={sessionUser} />
				</div>
			) : (
				<NavLink to='/login' className="login-button">
					login
				</NavLink>
			)} */}
		</div>
	);
}

export default Navigation;
