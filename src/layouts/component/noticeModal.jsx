import React from 'react';
import { Modal, Grid, Confirm } from 'semantic-ui-react';
import { TextField, InputAdornment, IconButton, Button, Typography } from '@material-ui/core';

export default class AuthModal extends React.Component {
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
							{this.props.type == 'NOTICE' ? <h3>Notice</h3> : <h3>News</h3>}
						</div>
					</Modal.Header>
					<Modal.Content>
						<Grid columns={1} stretched={true}>
							<Grid.Row>
								<Grid.Column>
									<Typography variant="h5" component="h2">
										{this.props.title}
									</Typography>
									<Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
										{this.props.desc}
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
