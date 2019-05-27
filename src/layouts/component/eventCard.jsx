import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { People } from '@material-ui/icons';
import AuthModal from './authModal';
import { Header, Image, Modal } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';
import EventDetailModal from '../component/eventDetailModal';
import LoadingModal from '../component/loadingModal';
import Pouchdb from 'pouchdb-browser';
var userdb = Pouchdb('user');
import axios from 'axios';
import { apiurl } from '../../store/data';

export default class EventCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isBooked: false
		};
	}

	componentDidMount() {
		{
			this.props.role == 'STUDENT' ? null : this.fetchData();
		}
	}

	fetchData() {
		axios
			.get(apiurl + `/api/checkBookedEvent?eventid=${this.props.eventId}&userid=${this.props.userId}`)
			.then((res) => {
				const isBooked = res.data['hasBooked'];
				this.setState({ isBooked });
			});
	}
	render() {
		return (
			<Card style={{ maxWidth: 345 }}>
				<EventDetailModal
					eventTitle={this.props.title}
					eventImage={this.props.image}
					eventDesc={this.props.content}
					totalSeat={this.props.totalSeat}
					createdAt={this.props.createdAt}
					updatedAt={this.props.updatedAt}
					eventStartDate={this.props.eventStartDate}
					eventType={this.props.eventType}
					eventStatus={this.props.eventStatus}
					eventEndDate={this.props.eventEndDate}
					seatLeft={this.props.seatLeft}
					eventId={this.props.eventId}
					userId={this.props.userId}
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
					{this.props.role == 'Guest' ? (
						<AuthModal
							trigger={
								<Button size="small" color="primary">
									Book
								</Button>
							}
						/>
					) : this.props.role == 'Student' ? this.state.isBooked == false ? (
						<LoadingModal
							trigger={
								<Button size="small" color="primary">
									Book
								</Button>
							}
						/>
					) : (
						<Button size="small" color="secondary">
							Booked
						</Button>
					) : (
						<Button size="small" color="primary">
							Book
						</Button>
					)}

					<Button size="small" color="primary">
						<People />
						12 Seat Left!
					</Button>
				</CardActions>
			</Card>
		);
	}
}
