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
			showPassword: false,
			password: '',
			course: '',
			study_level: '',
			gender: 'male',
			open: false,
			file: ''
		};
		this._handleImageChange = this._handleImageChange.bind(this);
		// this._handleSubmit = this._handleSubmit.bind(this);
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
		console.log('FILE ');
		console.log(file);
		console.log('Reader ');
		console.log(reader);
		console.log('Reader.result ');
		console.log(reader.result);

		reader.readAsDataURL(file);
	}

	render() {
		let { imagePreviewUrl } = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = <img src={imagePreviewUrl} />;
		}
		return (
			<div>
				<Modal trigger={this.props.trigger} dimmer={'blurring'}>
					<Modal.Content>
						<Modal.Description>
							<Segment placeholder>
								<div>
									<form onSubmit={this._handleSubmit}>
										<input type="file" onChange={this._handleImageChange} />
										<button
											type="submit"
											onClick={() => {
												console.log('File from state ');
												console.log(this.state.file);
												var bodyFormData = new FormData();
												bodyFormData.append('imageFile', this.state.file);

												axios({
													method: 'post',
													url: apiurl + '/api/upload',
													data: bodyFormData,
													config: { headers: { 'Content-Type': 'multipart/form-data' } }
												})
													.then(function(response) {
														console.log(response);
													})
													.catch(function(response) {
														console.log(response);
													});
											}}
										>
											Upload Image
										</button>
									</form>
									{$imagePreview}
								</div>
								<Grid columns={2}>
									<Grid.Row>
										<Grid.Column>
											<Input
												fluid
												iconPosition="left"
												label="First Name"
												placeholder="First Name"
												onChange={(e) =>
													this.setState({
														firstname: e.target.value
													})}
											/>
										</Grid.Column>
										<Grid.Column>
											<Input
												fluid
												iconPosition="left"
												label="Last Name"
												placeholder="Last Name"
												onChange={(e) =>
													this.setState({
														lastname: e.target.value
													})}
											/>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column>
											<Input
												fluid
												iconPosition="left"
												label="Username"
												placeholder="Username"
												onChange={(e) =>
													this.setState({
														username: e.target.value
													})}
											/>
										</Grid.Column>
										<Grid.Column>
											<Input
												fluid
												iconPosition="left"
												label="Email"
												placeholder="Email"
												onChange={(e) =>
													this.setState({
														email: e.target.value
													})}
											/>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column>
											<Input
												fluid
												iconPosition="right"
												label="Password"
												placeholder="Password"
												type={this.state.showPassword ? 'text' : 'password'}
												icon
												onChange={(e) =>
													this.setState({
														password: e.target.value
													})}
											>
												<input />
												<IconButton
													aria-label="Toggle password visibility"
													onClick={this.handleClickShowPassword.bind(this)}
												>
													{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</Input>
										</Grid.Column>
										<Grid.Column>
											<Input
												iconPosition="left"
												label="Student ID"
												placeholder="Student ID"
												onChange={(e) =>
													this.setState({
														studentId: e.target.value
													})}
											/>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
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
											<Input
												fluid
												iconPosition="left"
												label="Email"
												placeholder="Email"
												onChange={(e) =>
													this.setState({
														email: e.target.value
													})}
											/>
										</Grid.Column>
									</Grid.Row>
									{/* <Grid.Column>
											<Typography gutterBottom variant="h5" component="h2">
												Sign Up
											</Typography>
											<Grid columns={2} relaxed>
												<Grid.Column>
													<Input
														fluid
														iconPosition="left"
														label="First Name"
														placeholder="First Name"
														onChange={(e) =>
															this.setState({
																firstname: e.target.value
															})}
													/>
												</Grid.Column>

												<Grid.Column>
													<Input
														fluid
														iconPosition="left"
														label="Last Name"
														placeholder="Last Name"
														onChange={(e) =>
															this.setState({
																lastname: e.target.value
															})}
													/>
												</Grid.Column>
												<Grid.Column>
													<Input
														iconPosition="left"
														label="Username"
														placeholder="Username"
														onChange={(e) =>
															this.setState({
																username: e.target.value
															})}
													/>
												</Grid.Column>

												<Grid.Column>
													<Input
														iconPosition="left"
														label="Email"
														placeholder="Email"
														onChange={(e) =>
															this.setState({
																email: e.target.value
															})}
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
													<Input
														iconPosition="left"
														label="Student ID"
														placeholder="Student ID"
														onChange={(e) =>
															this.setState({
																studentId: e.target.value
															})}
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
													content="Register"
													primary
													onClick={() => {
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
													}}
												/>
											</Grid>
										</Grid.Column> */}
								</Grid>
							</Segment>
						</Modal.Description>
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}
