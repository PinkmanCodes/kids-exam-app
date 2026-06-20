import React, { useState } from 'react';
import { Button, Container, TextField, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = () => {
		if (username === 'student' && password === '12345') {
			dispatch(login());
			navigate('/dashboard');
		} else {
			setError('Invalid username or password');
		}
	};

	return (
		<Container maxWidth="sm">
			<Stack spacing={2}>
				<TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
				<TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				{error && <Typography color="error">{error}</Typography>}
				<Button variant="contained" onClick={handleLogin}>
					Login
				</Button>
			</Stack>
		</Container>
	);
}