import React from 'react';
import { useState } from 'react';

import Users from './Users.jsx';
const Search = (props) => {
	const [search, setSearch] = useState('');
	
    const lowerCase = search.toLowerCase();

	const filteredUsers = props.user.filter((user) =>
		user.firstName.toLowerCase().includes(lowerCase)
	);

	return (
		<>
			<div>
				{' '}
				<label htmlFor="search-id">Search user:</label>
				<input
					className="search-input"
					type="text"
					id="search-id"
					value={search}
					placeholder="Search user..."
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<Users filterItens={filteredUsers} />
		</>
	);
};

export default Search;