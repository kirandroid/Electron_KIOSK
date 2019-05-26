import React, { Component } from 'react';
import axios from 'axios';
import { apiurl } from '../../../../store/data';

import ActivityCard from '../../../component/activityCard';
import { Grid } from '@material-ui/core';

export default class Community extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activities: []
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
		axios.get(apiurl + '/api/activity?type=COMMUNITY').then((res) => {
			const activities = res.data;
			this.setState({ activities });
		});
	}

	render() {
		return (
			<div>
				<div style={{ flexGrow: 1, padding: 10 }}>
					<Grid container>
						{this.state.activities.map((activity) => (
							<Grid item xs={3} style={{ padding: 5 }} key={activity.ACT_ID}>
								<ActivityCard
									title={activity.ACT_NAME}
									content={activity.ACT_DESCRIPTION}
									image={activity.ACT_IMAGE}
								/>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		);
	}
}
