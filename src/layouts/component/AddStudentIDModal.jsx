import React from 'react';
import { Image, Modal, Grid, Button } from 'semantic-ui-react';
import { TextField, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import axios from 'axios';
import { apiurl } from '../../store/data';

export default class AddStudentIDModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			studentID: 1,
			addButton: 'Add ID'
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
						<h3>Add Student ID</h3>
					</div>
				</Modal.Header>
				<Modal.Content>
					<Grid columns={1} stretched={true}>
						<Grid.Row>
							<Grid.Column>
								<TextField
									label="Student ID"
									fullWidth
									margin="normal"
									onChange={(e) =>
										this.setState({
											studentID: e.target.value
										})}
									variant="outlined"
								/>
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
							content={this.state.addButton}
							primary
							onClick={() => {
								axios
									.post(apiurl + '/api/addstudentid', {
										STUDENT_ID: this.state.studentID
									})
									.then((response) => {
										this.setState({
											addButton: 'LOADING'
										});
										console.log(response);
									})
									.catch((error) => {
										this.setState({
											addButton: 'ERROR'
										});
										console.log(error);
									});
							}}
						/>
					</div>
				</Modal.Actions>
			</Modal>
		);
	}
}
