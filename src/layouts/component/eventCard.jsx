import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { People } from '@material-ui/icons';
import AuthModal from './authModal';
import { Header, Image, Modal } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';
import EventDetailModal from '../component/eventDetailModal';

export default class EventCard extends React.Component {
	render() {
		return (
			<Card style={{ maxWidth: 345 }}>
				<EventDetailModal
					eventTitle={this.props.title}
					eventImage={this.props.image}
					eventDesc={this.props.content}
					trigger={
						<CardActionArea onClick={() => {}}>
							<CardMedia style={{ height: 140 }} image={this.props.image} />
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									<LinesEllipsis
										text={this.props.title}
										maxLine="1"
										ellipsis="..."
										trimRight
										basedOn="letters"
									/>
								</Typography>
								<Typography component="p">
									<LinesEllipsis
										text={this.props.content}
										maxLine="1"
										ellipsis="..."
										trimRight
										basedOn="letters"
									/>
								</Typography>
							</CardContent>
						</CardActionArea>
					}
				/>

				<CardActions>
					{/* To call a Signup Modal when clicked semantic needs to pass a trigger, so here the trigger is the button */}
					<AuthModal
						trigger={
							<Button size="small" color="primary">
								Book
							</Button>
						}
					/>
					<Button size="small" color="primary">
						<People />
						12 Seat Left!
					</Button>
				</CardActions>
			</Card>
		);
	}
}
