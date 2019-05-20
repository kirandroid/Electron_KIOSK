import React from 'react';
import { Header, Image, Modal, Divider, Grid, Segment, Form, Button } from 'semantic-ui-react';
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

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Pouchdb from 'pouchdb-browser';
var userdb = new Pouchdb('user');

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
			open: false
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
				<Dialog
					open={this.state.open}
					onClose={this.setState({ open: false })}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Let Google help apps determine location. This means sending anonymous location data to
							Google, even when no apps are running.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.setState({ open: false })}>Disagree</Button>
						<Button onClick={this.setState({ open: false })} autoFocus>
							Agree
						</Button>
					</DialogActions>
				</Dialog>

				<Modal trigger={this.props.trigger}>
					<Modal.Content>
						<Modal.Description>
							<Segment placeholder>
								<Grid columns={2} stackable textAlign="center">
									<Divider vertical>Or</Divider>

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

												<Button
													content="Login"
													primary
													onClick={() => {
														axios
															.post('http://localhost:4000/api/login', {
																USERNAME: this.state.username,
																PASSWORD: this.state.password
															})
															.then((response) => {
																console.log(response.data[0]);
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
															})
															.catch((error) => {
																console.log(error);
															});
													}}
												/>
											</Form>
										</Grid.Column>

										<Grid.Column>
											<Typography gutterBottom variant="h5" component="h2">
												Sign Up
											</Typography>
											<Grid columns={2}>
												<Grid.Column>
													<TextField
														onChange={(e) =>
															this.setState({
																firstname: e.target.value
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
																lastname: e.target.value
															})}
														label="Last Name"
														margin="normal"
														variant="outlined"
													/>
												</Grid.Column>
												<Grid.Column>
													<TextField
														onChange={(e) =>
															this.setState({
																username: e.target.value
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
																email: e.target.value
															})}
														label="Email"
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
																password: e.target.value
															})}
														InputProps={{
															endAdornment: (
																<InputAdornment position="end">
																	<IconButton
																		aria-label="Toggle password visibility"
																		onClick={this.handleClickShowPassword.bind(
																			this
																		)}
																	>
																		{this.state.showPassword ? (
																			<VisibilityOff />
																		) : (
																			<Visibility />
																		)}
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
																studentId: e.target.value
															})}
														label="Student ID"
														margin="normal"
														variant="outlined"
													/>
												</Grid.Column>

												<Grid.Column>
													<TextField
														onChange={(e) =>
															this.setState({
																contact: e.target.value
															})}
														label="Phone"
														margin="normal"
														variant="outlined"
													/>
												</Grid.Column>

												<Grid.Column>
													<FormControl margin="normal" variant="outlined">
														<InputLabel
															ref={(ref) => {
																this.InputLabelRef = ref;
															}}
														>
															Level
														</InputLabel>
														<Select
															value={this.state.study_level}
															onChange={(e) =>
																this.setState({
																	study_level: e.target.value
																})}
															input={
																<OutlinedInput name="Level" id="outlined-age-simple" />
															}
														>
															<MenuItem value="">
																<em>None</em>
															</MenuItem>
															<MenuItem value={4}>4</MenuItem>
															<MenuItem value={5}>5</MenuItem>
															<MenuItem value={6}>6</MenuItem>
														</Select>
													</FormControl>
												</Grid.Column>

												<Grid.Column>
													<FormControl margin="normal" variant="outlined">
														<InputLabel
															ref={(ref) => {
																this.InputLabelRef = ref;
															}}
														>
															Course
														</InputLabel>
														<Select
															value={this.state.course}
															onChange={(e) =>
																this.setState({
																	course: e.target.value
																})}
															input={<OutlinedInput name="Course" />}
														>
															<MenuItem value="">
																<em>None</em>
															</MenuItem>
															<MenuItem value={'Bsc CS&SE'}>Bsc CS&SE</MenuItem>
															<MenuItem value={'BBA'}>BBA</MenuItem>
														</Select>
													</FormControl>
												</Grid.Column>

												<Grid.Column>
													<FormControl component="fieldset">
														<FormLabel component="legend">Gender</FormLabel>
														<RadioGroup
															aria-label="Gender"
															name="gender1"
															value={this.state.gender}
															onChange={(e) =>
																this.setState({
																	gender: e.target.value
																})}
														>
															<FormControlLabel
																value="female"
																control={<Radio />}
																label="Female"
															/>
															<FormControlLabel
																value="male"
																control={<Radio />}
																label="Male"
															/>
															<FormControlLabel
																value="other"
																control={<Radio />}
																label="Other"
															/>
														</RadioGroup>
													</FormControl>
												</Grid.Column>

												<Button
													content="Login"
													primary
													onClick={() => {
														axios
															.post('http://localhost:4000/api/register', {
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
																this.setState({ open: true });
															})
															.catch((error) => {
																console.log(error);
															});
													}}
												/>
											</Grid>
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
