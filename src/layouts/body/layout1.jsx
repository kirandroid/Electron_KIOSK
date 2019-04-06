import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Item from './Item';

export default (props) => (
	<div style={{ flexGrow: 1 }}>
		<Grid container>
			<Grid item xs={3}>
				<Item Text="Left" />
			</Grid>
			<Grid item xs={3}>
				<Item Text="Right" />
			</Grid>
			<Grid item xs={3}>
				<Item Text="Right" />
			</Grid>
			<Grid item xs={3}>
				<Item Text="Right" />
			</Grid>
		</Grid>
	</div>
);
