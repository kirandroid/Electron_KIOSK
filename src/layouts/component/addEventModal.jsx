import React from 'react';
import { Header, Image, Modal, Divider, Grid, Segment, Form, Button } from 'semantic-ui-react';
import { TextField, Typography, FormControl, MenuItem, Select, OutlinedInput, InputLabel } from '@material-ui/core';
import axios from 'axios';
import Pouchdb from 'pouchdb-browser';
var userdb = new Pouchdb('user');
import { apiurl } from '../../store/data';

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
														seatNumber: e.target.value
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
											content="Add Event"
											primary
											onClick={() => {
												axios
													.post(apiurl + '/api/addevent', {
														TITLE: this.state.title,
														IMAGE_URL: this.state.image,
														DESCRIPTION: this.state.description,
														SEAT_NUMBER: this.state.seatNumber,
														CREATED_AT: Date.now(),
														UPDATED_AT: Date.now(),
														EVENT_DATE: Date.now(),
														EVENT_TIME: this.state.eventTime,
														EVENT_TYPE: this.state.eventType,
														EVENT_STATUS: this.state.eventStatus
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
