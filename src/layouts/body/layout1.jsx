import { Grid, Paper } from '@material-ui/core';
import Item from './Item';
import React, { Component } from 'react';
import Flickity from 'react-flickity-component';

export default class layout1 extends Component {
	render() {
		return (
			<div>
				<Flickity
					elementType={'div'} // default 'div'
					options={{
						initialIndex: 2,
						freeScroll: true,
						contain: true,
						prevNextButtons: false,
						pageDots: false,
						autoPlay: true
					}} // takes flickity options {}
					disableImagesLoaded={false} // default false
					reloadOnUpdate // default false
				>
					<img src="https://picsum.photos/1000/300/?image=1080" />
					<img src="https://picsum.photos/1000/300/?image=1075" />
					<img src="https://picsum.photos/1000/300/?image=1072" />
				</Flickity>
				<div style={{ padding: 10 }}>
					<Flickity
						elementType={'div'} // default 'div'
						options={{
							initialIndex: 2,
							freeScroll: true,
							contain: true,
							prevNextButtons: false,
							pageDots: false,
							autoPlay: true
						}} // takes flickity options {}
						disableImagesLoaded={false} // default false
						reloadOnUpdate // default false
					>
						<Item Text="Left" />
						<Item Text="Right" />
						<Item Text="Right" />
						<Item Text="Right" />
						<Item Text="Right" />
						<Item Text="Right" />
						<Item Text="Right" />
					</Flickity>
				</div>
			</div>
		);
	}
}
