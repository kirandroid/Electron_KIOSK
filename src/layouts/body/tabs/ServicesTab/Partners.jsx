import React, { Component } from 'react';
import axios from 'axios';
import { apiurl } from '../../../../store/data';

import ActivityCard from '../../../component/activityCard';
import { Grid } from '@material-ui/core';

export default class Partner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			services: []
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
		axios.get(apiurl + '/api/service?type=PARTNER').then((res) => {
			const services = res.data;
			this.setState({ services });
		});
	}

	render() {
		return (
			<div>
				<div style={{ flexGrow: 1, padding: 10 }}>
					<Grid container>
						{this.state.services.map((service) => (
							<Grid item xs={3} style={{ padding: 5 }} key={service.SER_ID}>
								<ActivityCard
									title={service.SER_NAME}
									content={service.SER_DESCRIPTION}
									image={service.SER_IMAGE}
								/>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		);
	}
}
