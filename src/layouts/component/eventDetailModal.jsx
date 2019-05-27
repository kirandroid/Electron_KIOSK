import React from 'react';
import { Header, Image, Modal, Grid, Segment, Form, Button, Icon } from 'semantic-ui-react';
import { Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@material-ui/core';
import axios from 'axios';
import Moment from 'moment';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
	AccountCircle,
	PermIdentity,
	Email,
	AlternateEmail,
	Phone,
	People,
	Sync,
	Check,
	Layers,
	Book
} from '@material-ui/icons';
import { apiurl } from '../../store/data';

export default class EventDetailModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isBooked: false
		};
	}

	render() {
		return (
			<div>
				<Modal trigger={this.props.trigger} dimmer={'blurring'} size="large">
					<Modal.Header>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<h3>{this.props.eventTitle}</h3>
						</div>
					</Modal.Header>
					<Modal.Content>
						<div>
							<div
								style={{
									maxHeight: '600px',
									minHeight: '300px',
									backgroundImage: `url(${this.props.eventImage})`,
									display: 'flex',
									justifyContent: 'center',
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat'
								}}
							/>
							<ExpansionPanel>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<Typography>Event Description</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>{this.props.eventDesc}</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						</div>

						<div style={{ padding: '20px' }}>
							<Grid columns={2}>
								<Grid.Row>
									<Grid.Column>
										<Paper>
											<List>
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<PermIdentity />
														</Avatar>
													</ListItemAvatar>
													<ListItemText
														primary="Total Seat"
														secondary={this.props.totalSeat}
													/>
												</ListItem>
												<Divider variant="inset" component="li" />
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<AccountCircle />
														</Avatar>
													</ListItemAvatar>
													<ListItemText
														primary="Event Type"
														secondary={this.props.eventType}
													/>
												</ListItem>
												<Divider variant="inset" component="li" />
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<AlternateEmail />
														</Avatar>
													</ListItemAvatar>
													<ListItemText
														primary="Event Status"
														secondary={this.props.eventStatus}
													/>
												</ListItem>
												<Divider variant="inset" component="li" />
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<Email />
														</Avatar>
													</ListItemAvatar>
													<ListItemText primary="Seat Left" secondary={this.props.seatLeft} />
												</ListItem>
												<Divider variant="inset" component="li" />
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<Layers />
														</Avatar>
													</ListItemAvatar>
													<ListItemText primary="Event ID" secondary={this.props.eventId} />
												</ListItem>
											</List>
										</Paper>
									</Grid.Column>
									<Grid.Column>
										<Paper>
											<List>
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<Book />
														</Avatar>
													</ListItemAvatar>
													<ListItemText
														primary="Event Start Date"
														secondary={Moment(this.props.eventStartDate).format(
															'YYYY-MM-DD'
														)}
													/>
												</ListItem>
												<Divider variant="inset" component="li" />
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<Phone />
														</Avatar>
													</ListItemAvatar>
													<ListItemText
														primary="Event End Date"
														secondary={Moment(this.props.eventEndDate).format('YYYY-MM-DD')}
													/>
												</ListItem>
												<Divider variant="inset" component="li" />
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<Check />
														</Avatar>
													</ListItemAvatar>
													<ListItemText
														primary="Created At"
														secondary={
															Moment(this.props.createdAt).format('YYYY-MM-DD') +
															' --- ' +
															Moment(this.props.createdAt).fromNow()
														}
													/>
												</ListItem>

												<Divider variant="inset" component="li" />
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<Sync />
														</Avatar>
													</ListItemAvatar>
													<ListItemText
														primary="Updated At"
														secondary={
															Moment(this.props.updatedAt).format('YYYY-MM-DD') +
															' --- ' +
															Moment(this.props.updatedAt).fromNow()
														}
													/>
												</ListItem>
											</List>
										</Paper>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</div>
					</Modal.Content>
					<Modal.Actions>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Button
								content={this.state.isBooked == true ? 'Booked' : 'Book'}
								primary
								disabled={this.state.isBooked == true ? true : false}
								onClick={() => {
									axios
										.post(apiurl + '/api/bookevent', {
											BOOK_DATE: Date.now(),
											EVENT_ID: this.props.eventId,
											USER_ID: this.props.userId
										})
										.then((response) => {
											console.log(response);
											axios
												.put(apiurl + '/api/updateSeat', {
													SEAT_LEFT: this.props.seatLeft,
													EVENT_ID: this.props.eventId
												})
												.then((response) => {
													console.log(response);
												})
												.catch((error) => {
													console.log(error);
												});
										})
										.catch((error) => {
											console.log(error);
										});
									this.setState({
										isBooked: true
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
