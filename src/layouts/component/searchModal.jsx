import React from 'react';
import { Modal, Grid, Confirm } from 'semantic-ui-react';
import { TextField, InputAdornment, IconButton, Button, Typography } from '@material-ui/core';

export default class SearchModal extends React.Component {
	render() {
		return (
			<div>
				<Modal dimmer={'blurring'} size="tiny" trigger={this.props.trigger}>
					<Modal.Header>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							Search Result
						</div>
					</Modal.Header>
					<Modal.Content>
						<Grid columns={1} stretched={true}>
							<Grid.Row>
								<Grid.Column>
									<Typography variant="h5" component="h2">
										{this.props.searchTitle}
									</Typography>
									<Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
										{this.props.searchTitle != 'Gaming Competition' ? (
											'Not Found!'
										) : (
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.'
										)}
									</Typography>
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
							<Button type="submit" variant="contained" color="primary" onClick={() => {}}>
								Close
							</Button>
						</div>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}
