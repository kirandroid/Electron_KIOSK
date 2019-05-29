import React, { Component } from 'react';
import axios from 'axios';
import UserCard from '../../../component/userCard';
import { Grid, Paper, CircularProgress, Button } from '@material-ui/core';
import { apiurl } from '../../../../store/data';
import AddStudentIDModal from '../../../component/AddStudentIDModal';

export default class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		axios.get(apiurl + '/api/users').then((res) => {
			const users = res.data;
			this.setState({ users });
		});
	}

	render() {
		return (
			<div style={{ flexGrow: 1, padding: 10 }}>
				{this.props.role == 'Admin' ? (
					<AddStudentIDModal
						trigger={
							<Button
								type="submit"
								variant="contained"
								color="primary"
								style={{ marginRight: '10px' }}
								onClick={() => {
									console.log('YOYOYOY');
								}}
							>
								Add Student ID
							</Button>
						}
					/>
				) : null}
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
