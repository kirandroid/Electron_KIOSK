import React from 'react';
import HeaderSection from './layouts/component/header';
import Home from './layouts/body/tabs/Home';
import Event from './layouts/body/tabs/Event';
import User from './layouts/body/tabs/admin/User';
import Profile from './layouts/body/tabs/Profile';
import Activities from './layouts/body/tabs/Activities';
import Booking from './layouts/body/tabs/Booking';
import Services from './layouts/body/tabs/Services';
import { Button, Tab } from 'semantic-ui-react';
import Pouchdb from 'pouchdb-browser';
var userdb = Pouchdb('user');

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			role: '',
			fullname: 'Guest User',
			profilePic: '',
			userId: '',
			username: '',
			password: '',
			firstname: '',
			lastname: '',
			email: '',
			studentId: '',
			contact: '',
			password: '',
			course: '',
			study_level: '',
			gender: '',
			createdAt: '',
			updatedAt: ''
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
					profilePic: doc.IMAGE_URL,
					userId: doc.USER_ID,
					username: doc.USERNAME,
					password: doc.PASSWORD,
					firstname: doc.FIRST_NAME,
					lastname: doc.LAST_NAME,
					email: doc.EMAIL,
					studentId: doc.STUDENT_ID,
					contact: doc.CONTACT,
					password: doc.PASSWORD,
					course: doc.COURSE,
					study_level: doc.STUDY_LEVEL,
					gender: doc.GENDER,
					createdAt: doc.CREATED_AT,
					updatedAt: doc.UPDATED_AT
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
			{ menuItem: 'Event', render: () => <Event role={this.state.role} /> },
			{ menuItem: 'All Bookings', render: () => <Booking role={this.state.role} /> },
			{ menuItem: 'Activities', render: () => <Activities role={this.state.role} /> },
			{ menuItem: 'Services', render: () => <Services role={this.state.role} /> },
			{ menuItem: 'User', render: () => <User /> }
		];

		const user = [
			{
				menuItem: 'Home',
				render: () => <Home />
			},
			{ menuItem: 'Event', render: () => <Event role={this.state.role} userId={this.state.userId} /> },
			{ menuItem: 'My Bookings', render: () => <Booking role={this.state.role} userId={this.state.userId} /> },
			{ menuItem: 'Activities', render: () => <Activities role={this.state.role} /> },
			{ menuItem: 'Services', render: () => <Services role={this.state.role} /> },
			{
				menuItem: 'Profile',
				render: () => (
					<Profile
						userID={this.state.userId}
						firstName={this.state.firstname}
						lastName={this.state.lastname}
						userName={this.state.username}
						password={this.state.password}
						email={this.state.email}
						profilePic={this.state.profilePic}
						createdAt={this.state.createdAt}
						updatedAt={this.state.updatedAt}
						studentId={this.state.studentId}
						role={this.state.role}
						study_level={this.state.study_level}
						course={this.state.course}
						contact={this.state.contact}
						gender={this.state.gender}
					/>
				)
			}
		];

		const guest = [
			{
				menuItem: 'Home',
				render: () => <Home />
			},
			{ menuItem: 'Event', render: () => <Event role={this.state.role} /> },
			{ menuItem: 'Activities', render: () => <Activities role={this.state.role} /> },
			{ menuItem: 'Services', render: () => <Services role={this.state.role} /> }
		];

		return (
			<div>
				<HeaderSection
					fullname={this.state.fullname}
					profilePic={this.state.profilePic}
					role={this.state.role}
				/>
				<Tab
					panes={
						this.state.role == 'Guest' ? (
							guest
						) : this.state.role == 'Admin' ? (
							adminPanes
						) : this.state.role == 'Student' ? (
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
