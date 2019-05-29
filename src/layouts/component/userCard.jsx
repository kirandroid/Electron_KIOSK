import React from 'react';
import { CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@material-ui/core';
import { People } from '@material-ui/icons';
import { Card, Icon, Header, Image, Modal } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Edit, Delete } from '@material-ui/icons';
import moment from 'moment';

export default class UserCard extends React.Component {
	render() {
		return (
			<Card>
				<Image
					src={this.props.image}
					wrapped
					ui={false}
					style={{
						height: 200,
						backgroundSize: 'cover'
					}}
				/>
				<Card.Content>
					<Card.Header>{this.props.title}</Card.Header>
					<Card.Meta>
						<span className="date">Joined {moment(this.props.joined).fromNow()}</span>
					</Card.Meta>
					<Card.Description>{this.props.content}</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}
