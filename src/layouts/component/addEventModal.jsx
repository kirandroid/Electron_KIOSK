import React from 'react';
import { Header, Image, Modal, Divider, Grid, Segment, Form, Button } from 'semantic-ui-react';
import { TextField, Typography, FormControl, MenuItem, Select, OutlinedInput, InputLabel } from '@material-ui/core';
import axios from 'axios';
import Pouchdb from 'pouchdb-browser';
var userdb = new Pouchdb('user');
import { apiurl } from '../../store/data';
import DateFnsUtils from '@date-io/date-fns';
import MomentUtils from '@date-io/moment'; // choose your lib
import Moment from 'moment';
import { DateTimePicker, KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default class AddEventModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			image: '',
			description: '',
			seatNumber: '',
			eventStartDate: Date.now(),
			eventTime: '',
			eventType: '',
			eventStatus: '',
			eventEndDate: Date.now(),
			file: '',
			imagePreviewUrl: ''
		};
		this._handleImageChange = this._handleImageChange.bind(this);
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
					<Image src={imagePreviewUrl} size="medium" rounded centered />
				</div>
			);
		}
		return (
			<Modal trigger={this.props.trigger} size="small">
				<Modal.Header>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<h3>Add Event</h3>
					</div>
				</Modal.Header>
				<Modal.Content>
					<Grid columns={1} stretched={true}>
						<Grid.Row>
							<Grid.Column>
								<TextField
									label="Event Name"
									fullWidth
									margin="normal"
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
						</Grid.Row>

						<Grid columns={2} stretched={true}>
							<Grid.Row>
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
									<TextField
										select
										label="Event Type"
										onChange={(e) =>
											this.setState({
												eventType: e.target.value
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
										<option key="d5" value="5">
											5
										</option>
										<option key="6d" value="6">
											6
										</option>
									</TextField>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<MuiPickersUtilsProvider utils={DateFnsUtils}>
										<DateTimePicker
											label="Event Start Date"
											inputVariant="outlined"
											value={this.state.eventStartDate}
											onChange={(e) => {
												this.setState({
													eventStartDate: Moment(e).unix()
												});
												console.log(
													Moment(this.state.eventStartDate).format('YYYY-MM-DD hh-mm')
												);
											}}
										/>
									</MuiPickersUtilsProvider>
								</Grid.Column>
								<Grid.Column>
									<MuiPickersUtilsProvider utils={DateFnsUtils}>
										<DateTimePicker
											label="Event End Date"
											inputVariant="outlined"
											value={this.state.eventEndDate}
											onChange={(e) => {
												this.setState({
													eventEndDate: Moment(e).unix()
												});
												console.log(Moment(this.state.eventEndDate).unix());
											}}
										/>
									</MuiPickersUtilsProvider>
								</Grid.Column>
							</Grid.Row>
							<Grid.Column>
								<div>
									<form>
										<input type="file" onChange={this._handleImageChange} />
									</form>
									{$imagePreview}
								</div>
							</Grid.Column>
						</Grid>
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
							content="Add Event"
							primary
							onClick={() => {
								var bodyFormData = new FormData();
								bodyFormData.append('TITLE', this.state.title);
								bodyFormData.append('IMAGE_URL', this.state.file);
								bodyFormData.append('DESCRIPTION', this.state.description);
								bodyFormData.append('SEAT_NUMBER', this.state.seatNumber);
								bodyFormData.append('CREATED_AT', Date.now());
								bodyFormData.append('UPDATED_AT', Date.now());
								bodyFormData.append('EVENT_DATE', this.state.eventStartDate);
								bodyFormData.append('EVENT_TYPE', this.state.eventType);
								bodyFormData.append('EVENT_STATUS', 'Active');
								bodyFormData.append('EVENT_END_DATE', this.state.eventEndDate);
								bodyFormData.append('SEAT_LEFT', this.state.seatNumber);

								axios({
									method: 'post',
									url: apiurl + '/api/addevent',
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
						/>
					</div>
				</Modal.Actions>
			</Modal>
		);
	}
}
