import React, { Component } from 'react';
import axios from 'axios';

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
			<div>
				<h1> {this.state.users.length} </h1>
			</div>
		);
	}
}
