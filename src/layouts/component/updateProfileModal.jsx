import React from 'react';
import { Header, Image, Modal, Divider, Grid, Segment, Form, Button, Input, Icon } from 'semantic-ui-react';
import {
	TextField,
	Typography,
	InputAdornment,
	IconButton,
	FormControl,
	MenuItem,
	Select,
	OutlinedInput,
	InputLabel,
	Radio,
	RadioGroup,
	FormHelperText,
	FormControlLabel,
	FormLabel
} from '@material-ui/core';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Pouchdb from 'pouchdb-browser';
var userdb = new Pouchdb('user');
import { apiurl } from '../../store/data';
import Profile from '../body/tabs/Profile';

export default class UpdateProfileModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			firstname: this.props.firstname,
			lastname: this.props.lastName,
			email: '',
			studentId: '',
			contact: '',
			password: '',
			course: '',
			study_level: '',
			gender: '',
			firstnameChanged: false,
			lastnameChanged: false,
			usernameChanged: false,
			emailChanged: false,
			contactChanged: false,
			levelChanged: false,
			courseChanged: false,
			genderChanged: false,
			changed: false
		};
	}

	render() {
		const profile = { render: () => <Profile /> };
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
							<h3>Update Profile</h3>
						</div>
					</Modal.Header>
					<Modal.Content>
						<Grid columns={2} stretched={true}>
							<Grid.Row>
								<Grid.Column>
									<TextField
										defaultValue={this.props.firstName}
										onChange={(e) =>
											this.setState({
												firstname: e.target.value,
												firstnameChanged: true,
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
												changed: true,
												lastnameChanged: true
											})}
										defaultValue={this.props.lastName}
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
												changed: true,
												usernameChanged: true
											})}
										defaultValue={this.props.userName}
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
												changed: true,
												emailChanged: true
											})}
										defaultValue={this.props.email}
										label="Email"
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
												changed: true,
												contactChanged: true
											})}
										defaultValue={this.props.contact}
										label="Contact"
										margin="normal"
										variant="outlined"
									/>
								</Grid.Column>
								<Grid.Column>
									<TextField
										select
										label="Study Level"
										defaultValue={this.props.study_level}
										onChange={(e) =>
											this.setState({
												study_level: e.target.value,
												changed: true,
												levelChanged: true
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
										defaultValue={this.props.course}
										onChange={(e) =>
											this.setState({
												course: e.target.value,
												changed: true,
												courseChanged: true
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
										defaultValue={this.props.gender}
										onChange={(e) =>
											this.setState({
												gender: e.target.value,
												genderChanged: true,
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
										.put(apiurl + '/api/updateProfile', {
											FIRST_NAME: !this.state.firstnameChanged
												? this.props.firstName
												: this.state.firstname,
											LAST_NAME: !this.state.lastnameChanged
												? this.props.lastName
												: this.state.lastname,
											USERNAME: !this.state.usernameChanged
												? this.props.userName
												: this.state.username,
											EMAIL: !this.state.emailChanged ? this.props.email : this.state.email,
											STUDY_LEVEL: !this.state.levelChanged
												? this.props.study_level
												: this.state.study_level,
											COURSE: !this.state.courseChanged ? this.props.course : this.state.course,
											CONTACT: !this.state.contactChanged
												? this.props.contact
												: this.state.contact,
											GENDER: !this.state.genderChanged ? this.props.gender : this.state.gender,
											UPDATED_AT: Date.now(),
											USERID: this.props.userID
										})
										.then((response) => {
											console.log(response);
											profile;
										})
										.catch((error) => {
											console.log(error);
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
