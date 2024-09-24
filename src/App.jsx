import { useEffect, useState } from 'react';
import './assets/App.css';
import Search from './assets/Components/Search.jsx';
const baseUrl = 'http://dummyjson.com/users';

import axios from 'axios';
function App() {
	// const fruits = ['banana', 'Pineapple', 'Watermelon', 'grape', 'Pear'];
	// const lowerCase = search.toLowerCase();
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get(baseUrl)
			.then((res) => {
				const data = res.data.users || [];

				setUsers(data);
			})

			.catch((err) => {
				console.error('erro: ', err);
			});
	}, []);

	return (
		<>
			<div className="container">
				<h1>User Register</h1>
				<Search user={users} />
			</div>
			
		</>
	);
}
export default App;
