import { Grid, Paper, CircularProgress, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Item from '../../component/Item';
import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import EventCard from '../../component/eventCard';
// import { events } from '../../../store/data';
import axios from 'axios';
import AddEventModal from '../../component/addEventModal';
import { apiurl } from '../../../store/data';

export default class Event extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [],
			loading: false
		};
	}

	componentDidMount() {
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
							flex: 1,
							justifyContent: 'center',
							alignContent: 'center'
						}}
					>
						<CircularProgress color="secondary" style={{ margin: '50' }} />
					</div>
				) : (
					<div style={{ flexGrow: 1, padding: 10 }}>
						<Grid container>
							{this.state.events.slice(0, 15).map((event) => (
								<Grid item xs={3} style={{ padding: 5 }} key={event.id}>
									<EventCard
										title={event.TITLE}
										image={event.IMAGE_URL}
										content={event.DESCRIPTION}
									/>
								</Grid>
							))}
							<AddEventModal
								trigger={
									<Fab
										style={{ position: 'absolute', bottom: 20, right: 20 }}
										variant="extended"
										aria-label="Delete"
									>
										<Add />
										Add Event
									</Fab>
								}
							/>
						</Grid>
					</div>
				)}
			</div>
		);
	}
}
