import React, { Component } from 'react';
import axios from 'axios';
// import { users } from "../../../../store/data";
import UserCard from '../../../component/userCard';
import { Grid, Paper, CircularProgress } from '@material-ui/core';

export default class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		axios.get('http://localhost:4000/api/users').then((res) => {
			const users = res.data;
			this.setState({ users });
		});
	}

	render() {
		return (
			<div style={{ flexGrow: 1, padding: 10 }}>
				<Grid container>
					{this.state.users.map((user) => (
						<Grid item xs={3} style={{ padding: 5 }} key={user.ID}>
							<UserCard
								title={user.FIRST_NAME + ' ' + user.LAST_NAME}
								content={user.EMAIL}
								image={user.IMAGE_URL}
								joined={user.CREATED_AT}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		);
	}
}
