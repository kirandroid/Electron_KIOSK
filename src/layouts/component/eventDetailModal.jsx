import React from 'react';
import { Header, Image, Modal, Divider, Grid, Segment, Form, Button, Icon } from 'semantic-ui-react';
import { TextField } from '@material-ui/core';
import axios from 'axios';

export default class EventDetailModal extends React.Component {
	render() {
		return (
			<Modal trigger={this.props.trigger} dimmer={'blurring'}>
				<Modal.Header>{this.props.eventTitle}</Modal.Header>
				<Modal.Content image scrolling>
					<Image size="large" src={this.props.eventImage} wrapped />

					<Modal.Description>
						<Header>{this.props.eventTitle}</Header>
						<p>{this.props.eventDesc}</p>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button primary>
						BOOK <Icon name="chevron right" />
					</Button>
				</Modal.Actions>
			</Modal>
		);
	}
}
