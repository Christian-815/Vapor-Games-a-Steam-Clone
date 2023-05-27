import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";
import { useHistory } from "react-router-dom";

function SignupFormModal() {
	const dispatch = useDispatch();
	const history = useHistory()
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [profile_pic, setProfile_pic] = useState('');
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!profile_pic) {
			return setErrors(['Must upload a profile picture'])
		}

		const newUser = new FormData();
		newUser.append('email', email)
		newUser.append('username', username)
		newUser.append('profile_pic', profile_pic)
		newUser.append('password', password)

		if (password === confirmPassword) {
			const data = await dispatch(signUp(newUser));
			if (data) {
				setErrors(data);
			} else {
				history.push('/')
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<div className="login-page">
			<div className="signup-page-form-container">
				<div>
					<h1 className="signup-form-header">CREATE YOUR ACCOUNT</h1>
					<form onSubmit={handleSubmit} className="signup-page-form">
						<div style={{ color: 'red' }}>
							{errors.map((error, idx) => (
								<div key={idx}>{error}</div>
							))}
						</div>
						<div style={{ color: '#AFAFAF', fontSize: '13px', fontWeight: 'bold' }}>
							Email Address
						</div>
						<input
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							style={{ padding: '6px 8px', width: '25em', backgroundColor: '#32353C', border: 'none', borderRadius: '2px', color: 'white' }}
						/>
						<div style={{ color: '#AFAFAF', fontSize: '13px', fontWeight: 'bold' }}>
							Username
						</div>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
							style={{ padding: '6px 8px', width: '25em', backgroundColor: '#32353C', border: 'none', borderRadius: '2px', color: 'white' }}
						/>
						<div style={{ color: '#AFAFAF', fontSize: '13px', fontWeight: 'bold' }}>
							Profile Picture
							<input
								type='file'
								accept=".jpg, .jpeg, .png"
								onChange={(e) => setProfile_pic(e.target.files[0])}
								placeholder='Profile Picture'
								name='profile_pic'
							/>
						</div>
						<div style={{ color: '#AFAFAF', fontSize: '13px', fontWeight: 'bold' }}>
							Password
						</div>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							style={{ padding: '6px 8px', width: '25em', backgroundColor: '#32353C', border: 'none', borderRadius: '2px', color: 'white' }}
						/>
						<div style={{ color: '#AFAFAF', fontSize: '13px', fontWeight: 'bold' }}>
							Confirm Password
						</div>
						<input
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
							style={{ padding: '6px 8px', width: '25em', backgroundColor: '#32353C', border: 'none', borderRadius: '2px', color: 'white' }}
						/>
						<button className="signup-page-button" type="submit">Sign Up</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignupFormModal;
