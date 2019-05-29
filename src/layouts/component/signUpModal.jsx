import React from 'react';
import { Modal, Grid, Button, Image } from 'semantic-ui-react';
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
			file: '',
			imagePreviewUrl: '',
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
			genderError: false,
			registerButton: 'Register'
		};
		this._handleImageChange = this._handleImageChange.bind(this);
	}
	handleClickShowPassword() {
		this.setState({ showPassword: !this.state.showPassword });
	}

	_handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		};

		reader.readAsDataURL(file);
	}

	render() {
		let { imagePreviewUrl } = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (
				<div>
					<Image src={imagePreviewUrl} size="medium" rounded centered />;
				</div>
			);
		}
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
										error={this.state.firstnameError == true ? true : false}
										helperText={
											this.state.firstnameError == true ? 'First name is Blank or invalid' : null
										}
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
										error={this.state.lastnameError == true ? true : false}
										helperText={
											this.state.lastnameError == true ? 'First name is Blank or invalid' : null
										}
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
										error={this.state.usernameError == true ? true : false}
										helperText={
											this.state.usernameError == true ? 'Username is Blank or invalid' : null
										}
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
										error={this.state.emailError == true ? true : false}
										helperText={this.state.emailError == true ? 'Email is Blank or invalid' : null}
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
										error={this.state.passwordError == true ? true : false}
										helperText={
											this.state.passwordError == true ? 'Password is Blank or invalid' : null
										}
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
										error={this.state.contactError == true ? true : false}
										helperText={
											this.state.contactError == true ? (
												'Contact is invalid or already used'
											) : null
										}
										label="Contact"
										margin="normal"
										variant="outlined"
									/>
								</Grid.Column>
								<Grid.Column>
									<TextField
										select
										value={this.state.study_level}
										label="Study Level"
										onChange={(e) =>
											this.setState({
												study_level: e.target.value,
												changed: true
											})}
										error={this.state.study_level == true ? true : false}
										helperText={
											this.state.study_level == true ? (
												'Study Level is invalid or already used'
											) : null
										}
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
										value={this.state.course}
										onChange={(e) =>
											this.setState({
												course: e.target.value,
												changed: true
											})}
										error={this.state.course == true ? true : false}
										helperText={
											this.state.course == true ? 'Course is invalid or already used' : null
										}
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
										value={this.state.gender}
										onChange={(e) =>
											this.setState({
												gender: e.target.value,
												changed: true
											})}
										error={this.state.genderError == true ? true : false}
										helperText={
											this.state.genderError == true ? 'Gender is invalid or already used' : null
										}
										row
									>
										<FormControlLabel value="female" control={<Radio />} label="Female" />
										<FormControlLabel value="male" control={<Radio />} label="Male" />
										<FormControlLabel value="other" control={<Radio />} label="Other" />
									</RadioGroup>
								</Grid.Column>
								<Grid.Column>
									<div>
										<form>
											<input type="file" onChange={this._handleImageChange} />
										</form>
										{$imagePreview}
									</div>
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
								content={this.state.registerButton}
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
														registerButton: 'ERROR',
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

													var bodyFormData = new FormData();
													bodyFormData.append('FIRST_NAME', this.state.firstname);
													bodyFormData.append('LAST_NAME', this.state.lastname);
													bodyFormData.append('USERNAME', this.state.username);
													bodyFormData.append('PASSWORD', this.state.password);
													bodyFormData.append('EMAIL', this.state.email);
													bodyFormData.append('imageFile', this.state.file);
													bodyFormData.append('STUDENT_ID', this.state.studentId);
													bodyFormData.append('GENDER', this.state.gender);
													bodyFormData.append('CONTACT', this.state.contact);
													bodyFormData.append('COURSE', this.state.course);
													bodyFormData.append('STUDY_LEVEL', this.state.study_level);
													bodyFormData.append('ROLE', 'Student');
													bodyFormData.append('CREATED_AT', Date.now());
													bodyFormData.append('UPDATED_AT', Date.now());

													axios({
														method: 'post',
														url: apiurl + '/api/register',
														data: bodyFormData,
														config: { headers: { 'Content-Type': 'multipart/form-data' } }
													})
														.then((response) => {
															this.setState({
																registerButton: 'LOADING'
															});
															console.log(response);
														})
														.catch((response) => {
															this.setState({
																registerButton: 'ERROR'
															});
															console.log(response);
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
											this.setState({
												registerButton: 'ERROR'
											});
										});
								}}
							/>
						</div>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}
