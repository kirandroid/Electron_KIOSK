import React from 'react';
import { CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@material-ui/core';
import { People } from '@material-ui/icons';
import { Card, Icon, Header, Image, Modal } from 'semantic-ui-react';
import moment from 'moment';
import LinesEllipsis from 'react-lines-ellipsis';

export default class BookingCard extends React.Component {
	render() {
		return (
			<Card>
				<Image src={this.props.image} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{this.props.title}</Card.Header>
					<Card.Meta>
						<span>Event starts from {moment(this.props.eventDate).format('YYYY-MM-DD')}</span>
						<br />
						<span>Booked Date {moment(this.props.bookedDate).format('YYYY-MM-DD')}</span>
						<br />
						<span>Booked By {this.props.bookedBy}</span>
					</Card.Meta>
					<Card.Description>
						<LinesEllipsis
							text={this.props.content}
							maxLine="2"
							ellipsis="..."
							trimRight
							basedOn="letters"
						/>
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}
