import React from 'react';

const Users = (props) => {
	return (
		<div className="data">
			<ul className="users">
				{props.filterItens.map((user, index) => (
					<li key={index}>
						<p className="user-name">{user.firstName}</p>
						<p className="user-title">{user.company.title}</p>
						<img src={user.image} alt="Profile image" />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Users;
