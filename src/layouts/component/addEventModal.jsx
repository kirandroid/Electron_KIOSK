import React from 'react';
import { Header, Image, Modal, Divider, Grid, Segment, Form, Button } from 'semantic-ui-react';
import { TextField, Typography, FormControl, MenuItem, Select, OutlinedInput, InputLabel } from '@material-ui/core';
import axios from 'axios';
import Pouchdb from 'pouchdb-browser';
var userdb = new Pouchdb('user');

export default class AddEventModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			image: '',
			description: '',
			seatNumber: '',
			eventDate: '',
			eventTime: '',
			eventType: '',
			eventStatus: ''
		};
	}

	render() {
		return (
			<Modal trigger={this.props.trigger}>
				<Modal.Content>
					<Modal.Description>
						<Segment placeholder>
							<Grid columns={1} stackable textAlign="center">
								<Grid.Column>
									<Typography gutterBottom variant="h5" component="h2">
										Add An Event
									</Typography>
									<Grid columns={1}>
										<Grid.Column>
											<TextField
												label="Event Name"
												style={{ margin: 8 }}
												fullWidth
												margin="normal"
												InputLabelProps={{
													shrink: true
												}}
												onChange={(e) =>
													this.setState({
														title: e.target.value
													})}
												variant="outlined"
											/>
										</Grid.Column>

										<Grid.Column>
											<TextField
												label="Event Description"
												multiline
												fullWidth
												rows="4"
												margin="normal"
												variant="outlined"
												onChange={(e) =>
													this.setState({
														description: e.target.value
													})}
											/>
										</Grid.Column>
										<Grid.Column>
											<TextField
												label="Total Seats"
												fullWidth
												margin="normal"
												variant="outlined"
												onChange={(e) =>
													this.setState({
														description: e.target.value
													})}
											/>
										</Grid.Column>

										<Grid.Column>
											<FormControl margin="normal" variant="outlined">
												<InputLabel
													ref={(ref) => {
														this.InputLabelRef = ref;
													}}
												>
													Event Type
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
													})
													.catch((error) => {
														console.log(error);
													});
											}}
										/>
									</Grid>
								</Grid.Column>
							</Grid>
						</Segment>
					</Modal.Description>
				</Modal.Content>
			</Modal>
		);
	}
}
