import React from 'react';
import { Image, Modal, Grid, Button } from 'semantic-ui-react';
import { TextField, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import axios from 'axios';
import { apiurl } from '../../store/data';

export default class AddNewsNoticeModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			createdat: Date.now(),
			updatedat: Date.now(),
			active: 1,
			type: 'NEWS'
		};
	}

	render() {
		return (
			<Modal trigger={this.props.trigger} size="small">
				<Modal.Header>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<h3>Add News Or Notice</h3>
					</div>
				</Modal.Header>
				<Modal.Content>
					<Grid columns={1} stretched={true}>
						<Grid.Row>
							<Grid.Column>
								<TextField
									label="Title"
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
									label="Description"
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
								<FormLabel component="legend">Type</FormLabel>
								<RadioGroup
									aria-label="Type"
									name="Type"
									value={this.state.type}
									onChange={(e) =>
										this.setState({
											type: e.target.value
										})}
									row
								>
									<FormControlLabel value="NEWS" control={<Radio />} label="News" />
									<FormControlLabel value="NOTICE" control={<Radio />} label="Notice" />
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
							content="Add"
							primary
							onClick={() => {
								axios
									.post(apiurl + '/api/addnewsnotice', {
										NN_TITLE: this.state.title,
										NN_DESC: this.state.description,
										CREATED_AT: this.state.createdat,
										UPDATED_AT: this.state.updatedat,
										ACTIVE: this.state.active,
										TYPE: this.state.type
									})
									.then((response) => {
										console.log(response);
										alert('Sucess');
									})
									.catch((error) => {
										console.log(error);
										alert('Error');
									});
							}}
						/>
					</div>
				</Modal.Actions>
			</Modal>
		);
	}
}
