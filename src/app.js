import React from 'react';
import Header from './layouts/component/header';
// import Tab from "./layouts/body/tab";
import Home from './layouts/body/tabs/Home';
import Event from './layouts/body/tabs/Event';
import User from './layouts/body/tabs/admin/User';
// import { tabs } from "../src/store/data";
import { Button, Tab } from 'semantic-ui-react';
import Pouchdb from 'pouchdb-browser';
var userdb = Pouchdb('user');

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			adminUser: true,
			role: '',
			fullname: 'Guest User',
			profilePic: ''
		};
	}

	componentWillMount() {
		this.fetchfromlocal();
	}

	fetchfromlocal() {
		userdb
			.get('user')
			.then((doc) => {
				this.setState({
					role: doc.ROLE,
					fullname: (doc.FIRST_NAME + ' ' + doc.LAST_NAME).toString(),
					profilePic: doc.IMAGE_URL
				});
			})
			.catch((err) => {
				if (err.name === 'not_found') {
					console.log(err);
					this.setState({
						role: 'Guest',
						fullname: 'Guest User',
						profilePic:
							'http://greenwings.co/wp-content/uploads/2018/09/blank-head-profile-pic-for-a-man.jpg'
					});
				} else {
					console.log(err);
				}
			});
	}

	render() {
		const adminPanes = [
			{
				menuItem: 'Home',
				render: () => <Home />
			},
			{ menuItem: 'Event', render: () => <Event /> },
			{ menuItem: 'Bookings', render: () => <Tab.Pane>Study SCREEN</Tab.Pane> },
			{ menuItem: 'User', render: () => <User /> },
			{ menuItem: 'Dashboard', render: () => <Tab.Pane>Profile SCREEN</Tab.Pane> }
		];

		const user = [
			{
				menuItem: 'Home',
				render: () => <Home />
			},
			{ menuItem: 'Event', render: () => <Event /> },
			{ menuItem: 'Bookings', render: () => <Tab.Pane>Study SCREEN</Tab.Pane> },
			{ menuItem: 'Profile', render: () => <Tab.Pane>Profile SCREEN</Tab.Pane> }
		];

		const guest = [
			{
				menuItem: 'Home',
				render: () => <Home />
			},
			{ menuItem: 'Event', render: () => <Event /> }
		];

		return (
			<div>
				<Header fullname={this.state.fullname} profilePic={this.state.profilePic} role={this.state.role} />
				<Tab
					panes={
						this.state.role == 'Guest' ? (
							guest
						) : this.state.role == 'Admin' ? (
							adminPanes
						) : this.state.role == 'User' ? (
							user
						) : (
							guest
						)
					}
				/>
			</div>
		);
	}
}
