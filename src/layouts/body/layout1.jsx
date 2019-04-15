import { Grid, Paper } from '@material-ui/core';
import Item from './Item';
import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

export default class layout1 extends Component {
	render() {
		return (
			<div>
				<Carousel autoplay={true} dragging={false} swiping={false} withoutControls={false}>
					<img src="https://picsum.photos/1000/300/?image=1080" />
					<img src="https://picsum.photos/1000/300/?image=1075" />
					<img src="https://picsum.photos/1000/300/?image=1072" />
					<img src="https://picsum.photos/1000/300/?image=1063" />
					<img src="https://picsum.photos/1000/300/?image=1043" />
					<img src="https://picsum.photos/1000/300/?image=1040" />
				</Carousel>
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
			</div>
		);
	}
}
