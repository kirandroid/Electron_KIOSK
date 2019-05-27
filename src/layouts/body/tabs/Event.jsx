import { Grid, Paper, CircularProgress, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Item from '../../component/Item';
import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import EventCard from '../../component/eventCard';
import axios from 'axios';
import AddEventModal from '../../component/addEventModal';
import { apiurl } from '../../../store/data';

import Pouchdb from 'pouchdb-browser';
var userdb = Pouchdb('user');
export default class Event extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [],
			loading: true
		};
	}
	componentWillReceiveProps(newprops) {
		if (newprops) {
			this.fetchData();
			console.log('Fetched');
		} else {
			console.log('Not');
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		axios.get(apiurl + `/api/events`).then((res) => {
			const events = res.data;
			console.log(res.data);
			this.setState({ events, loading: false });
		});
	}

	render() {
		return (
			<div>
				{this.state.loading ? (
					<div
						style={{
							justifyContent: 'center',
							display: 'flex',
							padding: '50px'
						}}
					>
						<CircularProgress color="secondary" style={{ margin: '50' }} />
					</div>
				) : (
					<div style={{ flexGrow: 1, padding: 10 }}>
						<div style={{ display: 'flex', justifyContent: 'end' }}>
							{this.props.role == 'Admin' ? (
								<AddEventModal
									trigger={
										<Fab variant="extended" color="secondary">
											<Add />
											Add Event
										</Fab>
									}
								/>
							) : this.props.role == 'Guest' || 'Student' ? null : null}
						</div>
						<Grid container>
							{this.state.events.slice(0, 15).map((event) => (
								<Grid item xs={3} style={{ padding: 5 }} key={event.id}>
									<EventCard
										role={this.props.role}
										title={event.TITLE}
										image={event.IMAGE_URL}
										content={event.DESCRIPTION}
										totalSeat={event.SEAT_NUMBER}
										createdAt={event.CREATED_AT}
										updatedAt={event.UPDATED_AT}
										eventStartDate={event.EVENT_DATE}
										eventType={event.EVENT_TYPE}
										eventStatus={event.EVENT_STATUS}
										eventEndDate={event.EVENT_END_DATE}
										seatLeft={event.SEAT_LEFT}
										eventId={event.EVENT_ID}
										userId={this.props.userId}
									/>
								</Grid>
							))}
						</Grid>
					</div>
				)}
			</div>
		);
	}
}
