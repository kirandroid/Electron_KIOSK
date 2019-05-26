import React from 'react';
import { Modal, Grid, Button, Confirm } from 'semantic-ui-react';

import { TextField, InputAdornment, IconButton } from '@material-ui/core';
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
			showPassword: false,
			changed: false
		};
	}

	handleClickShowPassword() {
		this.setState({ showPassword: !this.state.showPassword });
	}

	render() {
		return (
			<div>
				<Modal trigger={this.props.trigger} dimmer={'blurring'} size="tiny">
					<Modal.Header>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<h3>Login To UB-KIOSK</h3>
						</div>
					</Modal.Header>
					<Modal.Content>
						<Grid columns={1} stretched={true}>
							<Grid.Row>
								<Grid.Column>
									<TextField
										style={{ marginBottom: '20px' }}
										onChange={(e) =>
											this.setState({
												username: e.target.value,
												changed: true
											})}
										label="Username"
										margin="normal"
										variant="outlined"
									/>
								</Grid.Column>
								<Grid.Column>
									<TextField
										variant="outlined"
										type={this.state.showPassword ? 'text' : 'password'}
										label="Password"
										value={this.state.password}
										onChange={(e) =>
											this.setState({
												password: e.target.value,
												changed: true
											})}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<IconButton
														aria-label="Toggle password visibility"
														onClick={this.handleClickShowPassword.bind(this)}
													>
														{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
											)
										}}
									/>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Modal.Content>
					<Modal.Actions>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Button
								style={{ marginRight: '10px' }}
								content="Login"
								primary
								disabled={this.state.changed ? false : true}
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
												// var views = remote.getCurrentWindow();
												// views.loadFile(`src/index.html`);
												window.location.reload();
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
								}}
							/>
							<SignUpModal trigger={<Button content="Register An Account" secondary />} />
						</div>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}
