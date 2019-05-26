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

export default class AddActivityModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			changed: false,
			activityName: '',
			activityDescription: '',
			activityImage: '',
			activityType: '',
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
							<h3>Add Activity</h3>
						</div>
					</Modal.Header>
					<Modal.Content>
						<Grid columns={1} stretched={true}>
							<Grid.Row>
								<Grid.Column>
									<TextField
										onChange={(e) =>
											this.setState({
												activityName: e.target.value,
												changed: true
											})}
										label="Activity Name"
										margin="normal"
										variant="outlined"
									/>
								</Grid.Column>
								<Grid.Column>
									<TextField
										onChange={(e) =>
											this.setState({
												activityDescription: e.target.value,
												changed: true
											})}
										multiline
										rowsMax="4"
										label="Activity Description"
										margin="normal"
										variant="outlined"
									/>
								</Grid.Column>
								<Grid.Column>
									<FormLabel component="legend">Activity Type</FormLabel>
									<RadioGroup
										name="Type"
										onChange={(e) =>
											this.setState({
												activityType: e.target.value,
												changed: true
											})}
										row
									>
										<FormControlLabel value="SPORTS" control={<Radio />} label="Sports" />
										<FormControlLabel value="CLUB" control={<Radio />} label="Club" />
										<FormControlLabel value="COMMUNITY" control={<Radio />} label="Community" />
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
								content="Add Activity"
								primary
								disabled={this.state.changed ? false : true}
								onClick={() => {
									var bodyFormData = new FormData();
									bodyFormData.append('imageFile', this.state.file);
									bodyFormData.append('ACT_NAME', this.state.activityName);
									bodyFormData.append('ACT_DESCRIPTION', this.state.activityDescription);
									bodyFormData.append('ACT_TYPE', this.state.activityType);

									axios({
										method: 'post',
										url: apiurl + '/api/addactivity',
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
			</div>
		);
	}
}
