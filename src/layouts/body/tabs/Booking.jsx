import React, { Component } from 'react';
import axios from 'axios';
// import { users } from "../../../../store/data";
import BookingCard from '../../component/bookingCard';
import { Grid, Paper, CircularProgress } from '@material-ui/core';
import { apiurl } from '../../../store/data';

export default class Booking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bookings: []
		};
	}

	componentDidMount() {
		{
			this.props.role == 'Student'
				? axios
						.get(apiurl + `/api/bookings?userId=${this.props.userId}`)
						.then((res) => {
							const bookings = res.data;
							this.setState({ bookings });
							console.log(bookings);
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
					{this.state.bookings.map((booking) => (
						<Grid item xs={3} style={{ padding: 5 }} key={booking.EVENT_ID}>
							<BookingCard
								title={booking.TITLE}
								content={booking.DESCRIPTION}
								image={booking.IMAGE_URL}
								eventDate={booking.EVENT_DATE}
								bookedBy={booking.FIRST_NAME + ' ' + booking.LAST_NAME}
								bookedDate={booking.BOOKED_DATE}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		);
	}
}
