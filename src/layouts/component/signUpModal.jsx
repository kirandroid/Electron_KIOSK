import React from 'react';
import { Modal, Grid, Button } from 'semantic-ui-react';
import {
	TextField,
	InputAdornment,
	IconButton,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormLabel
} from '@material-ui/core';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Pouchdb from 'pouchdb-browser';
var userdb = new Pouchdb('user');
import { apiurl } from '../../store/data';

export default class SignUpModal extends React.Component {
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
			password: '',
			course: '',
			study_level: '',
			gender: 'male',
			changed: false,
			showPassword: false,
			open: false,
			usernameError: false,
			passwordError: false,
			firstnameError: false,
			lastnameError: false,
			emailError: false,
			studentIdError: false,
			contactError: false,
			passwordError: false,
			courseError: false,
			studylevelError: false,
			genderError: false
		};
	}
	handleClickShowPassword() {
		this.setState({ showPassword: !this.state.showPassword });
	}

	render() {
		return (
			<div>
				<Modal trigger={this.props.trigger} dimmer={'blurring'} size="small">
					<Modal.Header>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<h3>Register an Account</h3>
						</div>
					</Modal.Header>
					<Modal.Content>
						<Grid columns={2} stretched={true}>
							<Grid.Row>
								<Grid.Column>
									<TextField
										onChange={(e) =>
											this.setState({
												firstname: e.target.value,
												changed: true
											})}
										label="First Name"
										margin="normal"
										variant="outlined"
									/>
								</Grid.Column>
								<Grid.Column>
									<TextField
										onChange={(e) =>
											this.setState({
												lastname: e.target.value,
												changed: true
											})}
										label="Last Name"
										margin="normal"
										variant="outlined"
									/>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<TextField
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
										onChange={(e) =>
											this.setState({
												email: e.target.value,
												changed: true
											})}
										label="Email"
										margin="normal"
										variant="outlined"
									/>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row>
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
								<Grid.Column>
									<TextField
										onChange={(e) =>
											this.setState({
												studentId: e.target.value,
												changed: true
											})}
										label="Student ID"
										error={this.state.studentIdError == true ? true : false}
										helperText={
											this.state.studentIdError == true ? (
												'Student Id is invalid or already used'
											) : null
										}
										margin="normal"
										variant="outlined"
									/>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row>
								<Grid.Column>
									<TextField
										onChange={(e) =>
											this.setState({
												contact: e.target.value,
												changed: true
											})}
										label="Contact"
										margin="normal"
										variant="outlined"
									/>
								</Grid.Column>
								<Grid.Column>
									<TextField
										select
										label="Study Level"
										onChange={(e) =>
											this.setState({
												study_level: e.target.value,
												changed: true
											})}
										SelectProps={{
											native: true
										}}
										margin="normal"
										variant="outlined"
									>
										<option key="4" value="4">
											4
										</option>
										<option key="5" value="5">
											5
										</option>
										<option key="6" value="6">
											6
										</option>
									</TextField>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row>
								<Grid.Column>
									<TextField
										select
										label="Course"
										onChange={(e) =>
											this.setState({
												course: e.target.value,
												changed: true
											})}
										SelectProps={{
											native: true
										}}
										margin="normal"
										variant="outlined"
									>
										<option key="Bsc CS&SE" value="Bsc CS&SE">
											Bsc CS&SE
										</option>
										<option key="BBA" value="BBA">
											BBA
										</option>
									</TextField>
								</Grid.Column>
								<Grid.Column>
									<FormLabel component="legend">Gender</FormLabel>
									<RadioGroup
										aria-label="Gender"
										name="gender"
										onChange={(e) =>
											this.setState({
												gender: e.target.value,
												changed: true
											})}
										row
									>
										<FormControlLabel value="female" control={<Radio />} label="Female" />
										<FormControlLabel value="male" control={<Radio />} label="Male" />
										<FormControlLabel value="other" control={<Radio />} label="Other" />
									</RadioGroup>
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
								content="Register"
								primary
								disabled={this.state.changed ? false : true}
								onClick={() => {
									axios
										.get(apiurl + `/api/checkstudent?studentid=${this.state.studentId}`, {})
										.then((response) => {
											console.log(response.data['isAvail']);
											if (response.data['isAvail'] == true) {
												if (this.state.firstname == '') {
													this.setState({
														firstnameError: true
													});
												} else if (this.state.lastname == '') {
													this.setState({
														lastnameError: true
													});
												} else if (this.state.username == '') {
													this.setState({
														usernameError: true
													});
												} else if (this.state.password == '') {
													this.setState({
														passwordError: true
													});
												} else if (this.state.email == '') {
													this.setState({
														emailError: true
													});
												} else if (this.state.studentId == '') {
													this.setState({
														studentIdError: true
													});
												} else if (this.state.contact == '') {
													this.setState({
														contactError: true
													});
												} else if (this.state.course == '') {
													this.setState({
														courseError: true
													});
												} else if (this.state.study_level == '') {
													this.setState({
														studyLevelError: true
													});
												} else if (this.state.gender == '') {
													this.setState({
														genderError: true
													});
												} else {
													this.setState({
														usernameError: false,
														passwordError: false,
														firstnameError: false,
														lastnameError: false,
														emailError: false,
														studentIdError: false,
														contactError: false,
														passwordError: false,
														courseError: false,
														studylevelError: false,
														genderError: false
													});

													axios
														.post(apiurl + '/api/register', {
															FIRST_NAME: this.state.firstname,
															LAST_NAME: this.state.lastname,
															USERNAME: this.state.username,
															PASSWORD: this.state.password,
															EMAIL: this.state.email,
															STUDENT_ID: this.state.studentId,
															GENDER: this.state.gender,
															CONTACT: this.state.contact,
															COURSE: this.state.course,
															STUDY_LEVEL: this.state.study_level,
															ROLE: 'Student',
															CREATED_AT: Date.now(),
															UPDATED_AT: Date.now()
														})
														.then((response) => {
															console.log(response);
														})
														.catch((error) => {
															console.log(error);
														});
												}
												this.setState({
													studentIdError: false
												});
											} else {
												this.setState({
													studentIdError: true
												});
											}
										})
										.catch((error) => {
											console.log(error);
										});

									// axios
									// 	.post(apiurl + '/api/register', {
									// 		FIRST_NAME: this.state.firstname,
									// 		LAST_NAME: this.state.lastname,
									// 		USERNAME: this.state.username,
									// 		PASSWORD: this.state.password,
									// 		EMAIL: this.state.email,
									// 		STUDENT_ID: this.state.studentId,
									// 		GENDER: this.state.gender,
									// 		CONTACT: this.state.contact,
									// 		COURSE: this.state.course,
									// 		STUDY_LEVEL: this.state.study_level,
									// 		ROLE: 'Student',
									// 		CREATED_AT: Date.now(),
									// 		UPDATED_AT: Date.now()
									// 	})
									// 	.then((response) => {
									// 		console.log(response);
									// 	})
									// 	.catch((error) => {
									// 		console.log(error);
									// 	});
								}}
							/>
						</div>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}
