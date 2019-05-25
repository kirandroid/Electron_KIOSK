import React from 'react';
import { Header, Image, Modal, Divider, Grid, Segment, Form, Button, Confirm } from 'semantic-ui-react';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Pouchdb from 'pouchdb-browser';
var userdb = new Pouchdb('user');
import { apiurl } from '../../store/data';
import SignUpModal from './signUpModal';
const remote = require('electron').remote;

export default class AuthModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			firstname: '',
			lastname: '',
			email: '',
			studentId: '',
			contact: '',
			showPassword: false,
			password: '',
			course: '',
			study_level: '',
			gender: 'male',
			signInOpen: props.openModal
		};
	}

	signIn() {
		console.log('Start');
		axios
			.post('http://kioskapi.tk:4000/api/login', {
				USERNAME: this.state.username,
				PASSWORD: this.state.password
			})
			.then((response) => {
				console.log('Okay');
			})
			.catch((error) => {
				console.log('No');
			});
	}
	handleClickShowPassword() {
		this.setState({ showPassword: !this.state.showPassword });
	}

	render() {
		return (
			<div>
				<Modal trigger={this.props.trigger} dimmer={'blurring'}>
					<Modal.Content>
						<Modal.Description>
							<Segment placeholder>
								<Grid columns={2} stackable textAlign="center">
									{/* <Divider vertical>Or</Divider> */}

									<Grid.Row verticalAlign="middle">
										<Grid.Column>
											<Typography gutterBottom variant="h5" component="h2">
												Sign In
											</Typography>
											<Form>
												<Form.Input
													icon="user"
													iconPosition="left"
													label="Username"
													onChange={(e) =>
														this.setState({
															username: e.target.value
														})}
													placeholder="Username"
												/>
												<Form.Input
													icon="lock"
													iconPosition="left"
													label="Password"
													type="password"
													placeholder="Password"
													onChange={(e) =>
														this.setState({
															password: e.target.value
														})}
												/>

												<div style={{ margin: 10 }}>
													<Button
														content="Login"
														primary
														onClick={() => {
															axios
																.post(apiurl + '/api/login', {
																	USERNAME: this.state.username,
																	PASSWORD: this.state.password
																})
																.then((response) => {
																	console.log(response);
																	if (response.status == 200) {
																		console.log('Status 200');

																		var userData = {
																			_id: 'user',
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
																			USERNAME: response.data[0].USERNAME,
																			USER_ID: response.data[0].USER_ID
																		};
																		userdb.put(userData);
																		var views = remote.getCurrentWindow();
																		views.loadFile(`src/index.html`);
																	} else if (response.status == 204) {
																		console.log('Status 204');
																		<Confirm content="Incorrent Student ID or Password!" />;
																	} else {
																		console.log('Other');
																		<Confirm content="Student ID Doesnot Exist!" />;
																	}
																})
																.catch((error) => {
																	console.log(error);
																});
															this.setState({ signInOpen: false });
														}}
													/>
												</div>

												<SignUpModal
													trigger={<Button content="Register An Account" secondary />}
												/>
											</Form>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Segment>
						</Modal.Description>
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}
