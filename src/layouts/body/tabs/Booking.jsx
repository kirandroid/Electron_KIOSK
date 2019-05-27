import React, { Component } from 'react';
import axios from 'axios';
// import { users } from "../../../../store/data";
import UserCard from '../../component/userCard';
import { Grid, Paper, CircularProgress } from '@material-ui/core';
import { apiurl } from '../../../store/data';

export default class Booking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bookings: [],
			events: []
		};
	}

	componentDidMount() {
		var events = [];
		{
			// axios
			// 	.get(
			// 		apiurl + this.props.role == 'Student'
			// 			? `/api/bookings?userId=${this.props.userId}`
			// 			: `/api/allbookings`
			// 	)
			// 	.then((res) => {
			// 		const bookings = res.data;
			// 		this.setState({ bookings });
			// 		console.log(bookings);
			// 	})
			// 	.catch((err) => {
			// 		console.log(err);
			// 	})
			// 	.then(
			// 		this.state.bookings.map((booking) =>
			// 			axios
			// 				.get(apiurl + `/api/selectevents?eventId=${booking.EVENT_ID}`)
			// 				.then((res) => {
			// 					const events = res.data;
			// 					this.setState({ events });
			// 					console.log(events);
			// 				})
			// 				.catch((err) => {
			// 					console.log(err);
			// 				})
			// 		)
			// 	);
			this.props.role == 'Student'
				? axios
						.get(apiurl + `/api/bookings?userId=${this.props.userId}`)
						.then((res) => {
							const bookings = res.data;
							this.setState({ bookings });
							console.log(bookings);
							this.state.bookings.map((booking) =>
								axios
									.get(apiurl + `/api/selectevents?eventId=${booking.EVENT_ID}`)
									.then((res) => {
										events.push(res.data);
									})
									.catch((err) => {
										console.log(err);
									})
							);

							this.setState({ events });
							console.log(this.state.events);
						})
						.catch((err) => {
							console.log(err);
						})
				: axios
						.get(apiurl + `/api/allbookings`)
						.then((res) => {
							const bookings = res.data;
							this.setState({ bookings });
							console.log(bookings);
							this.state.bookings.map((booking) =>
								axios
									.get(apiurl + `/api/selectevents?eventId=${booking.EVENT_ID}`)
									.then((res) => {
										events.push(res.data);
									})
									.catch((err) => {
										console.log(err);
									})
							);

							this.setState({ events });
							console.log(this.state.events);
						})
						.catch((err) => {
							console.log(err);
						});
		}
	}

	render() {
		return (
			<div style={{ flexGrow: 1, padding: 10 }}>
				<Grid container>
					{this.state.events.map((event) => (
						<Grid item xs={3} style={{ padding: 5 }} key={event.EVENT_ID}>
							<UserCard
								title={event.TITLE}
								content={event.DESCRIPTION}
								image={event.IMAGE_URL}
								joined={event.CREATED_AT}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		);
	}
}
