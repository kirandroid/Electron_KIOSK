import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ tabs }) => (
	<div>
		<Paper>
			<Tabs value={0} indicatorColor="primary" textColor="primary" centered>
				{tabs.map((group) => <Tab label={group} />)}
			</Tabs>
		</Paper>
	</div>
);
