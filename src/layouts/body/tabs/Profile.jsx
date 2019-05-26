import React, { Component } from 'react';
import axios from 'axios';
import { apiurl } from '../../../store/data';
import UserAvatar from 'react-user-avatar';
import { Grid } from 'semantic-ui-react';
import Moment from 'moment';
import UpdateProfileModal from '../../component/updateProfileModal';
import {
	AccountCircle,
	PermIdentity,
	Email,
	AlternateEmail,
	Phone,
	People,
	Sync,
	Check,
	Layers,
	Book
} from '@material-ui/icons';
import {
	Button,
	Paper,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Divider
} from '@material-ui/core';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			CONTACT: '',
			COURSE: '',
			CREATED_AT: '',
			EMAIL: '',
			FIRST_NAME: '',
			GENDER: '',
			IMAGE_URL: '',
			LAST_NAME: '',
			PASSWORD: '',
			STUDENT_ID: '',
			STUDY_LEVEL: '',
			UPDATED_AT: '',
			USERNAME: ''
		};
	}

	componentWillReceiveProps(newprops) {
		if (newprops) {
			this.fetchData();
			console.log('Fetched');
		} else {
			console.log('Not');
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		axios
			.get('http://localhost:3000/api/selectUsers?id=' + this.props.userID)
			.then((response) => {
				this.setState({
					CONTACT: response.data[0].CONTACT,
					COURSE: response.data[0].COURSE,
					CREATED_AT: response.data[0].CREATED_AT,
					EMAIL: response.data[0].EMAIL,
					FIRST_NAME: response.data[0].FIRST_NAME,
					GENDER: response.data[0].GENDER,
					IMAGE_URL: response.data[0].IMAGE_URL,
					LAST_NAME: response.data[0].LAST_NAME,
					PASSWORD: response.data[0].PASSWORD,
					ROLE: response.data[0].ROLE,
					STUDENT_ID: response.data[0].STUDENT_ID,
					STUDY_LEVEL: response.data[0].STUDY_LEVEL,
					UPDATED_AT: response.data[0].UPDATED_AT,
					USERNAME: response.data[0].USERNAME
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		return (
			<div>
				{/* header */}
				<div>
					<div
						style={{
							position: 'absolute',
							padding: '10px'
						}}
					>
						<UpdateProfileModal
							userID={this.props.userID}
							firstName={this.state.FIRST_NAME}
							lastName={this.state.LAST_NAME}
							userName={this.state.USERNAME}
							password={this.state.PASSWORD}
							email={this.state.EMAIL}
							profilePic={this.state.IMAGE_URL}
							createdAt={this.state.CREATED_AT}
							updatedAt={this.state.UPDATED_AT}
							studentId={this.state.STUDENT_ID}
							study_level={this.state.STUDY_LEVEL}
							course={this.state.COURSE}
							contact={this.state.CONTACT}
							gender={this.state.GENDER}
							trigger={
								<Button variant="contained" color="secondary">
									Edit Profile
								</Button>
							}
						/>
					</div>
					<div
						style={{
							padding: '60px',
							backgroundImage: `url(https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
							display: 'flex',
							justifyContent: 'center',
							backgroundPosition: 'bottom',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}}
					>
						<UserAvatar
							size="150"
							name={this.state.FIRST_NAME + ' ' + this.state.LAST_NAME}
							src={this.state.IMAGE_URL}
						/>
					</div>
				</div>
				{/* body */}
				<div style={{ padding: '20px' }}>
					<Grid columns={2}>
						<Grid.Row>
							<Grid.Column>
								<Paper>
									<List>
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<PermIdentity />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary="Student ID" secondary={this.state.STUDENT_ID} />
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<AccountCircle />
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												primary="Name"
												secondary={this.state.FIRST_NAME + ' ' + this.state.LAST_NAME}
											/>
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<AlternateEmail />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary="Username" secondary={this.state.USERNAME} />
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<Email />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary="Email" secondary={this.state.EMAIL} />
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<Layers />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary="Study Level" secondary={this.state.STUDY_LEVEL} />
										</ListItem>
									</List>
								</Paper>
							</Grid.Column>
							<Grid.Column>
								<Paper>
									<List>
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<Book />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary="Course" secondary={this.state.COURSE} />
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<Phone />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary="Contact" secondary={this.state.CONTACT} />
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<People />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary="Gender" secondary={this.state.GENDER} />
										</ListItem>

										<Divider variant="inset" component="li" />
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<Check />
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												primary="Created At"
												secondary={
													Moment(this.state.CREATED_AT).format('YYYY-MM-DD') +
													' --- ' +
													Moment(this.state.CREATED_AT).fromNow()
												}
											/>
										</ListItem>

										<Divider variant="inset" component="li" />
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<Sync />
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												primary="Updated At"
												secondary={
													Moment(this.state.UPDATED_AT).format('YYYY-MM-DD') +
													' --- ' +
													Moment(this.state.UPDATED_AT).fromNow()
												}
											/>
										</ListItem>
									</List>
								</Paper>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		);
	}
}
