import { Grid, Paper } from '@material-ui/core';
import Item from '../../component/Item';
import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import axios from 'axios';
import EventDetailModal from '../../component/eventDetailModal';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			home_slider: [],
			test: [
				{ IMAGE: 'https://picsum.photos/1000/300/?image=1080' },
				{ IMAGE: 'https://picsum.photos/1000/300/?image=1075' },
				{ IMAGE: 'https://picsum.photos/1000/300/?image=1072' }
			]
		};
	}

	//   componentDidMount() {
	//     axios.get("http://kioskapi.tk:4000/api/featured_home_slider").then(res => {
	//       console.log(res.data);
	//       this.setState({ home_slider: res.data });
	//     });
	//   }

	render() {
		return (
			<div>
				<Grid container spacing={12} direction={'column'}>
					<Grid item xs={12}>
						<Flickity
							elementType={'div'} // default 'div'
							options={{
								initialIndex: 2,
								freeScroll: false,
								contain: true,
								prevNextButtons: false,
								pageDots: false,
								autoPlay: true
							}} // takes flickity options {}
							disableImagesLoaded={false} // default false
							reloadOnUpdate={true} // default false
						>
							{this.state.test.map((slider) => (
								<img
									style={{
										flex: 1,
										width: null,
										height: 300,
										objectFit: 'cover'
									}}
									src={slider.IMAGE}
								/>
							))}
							{/* <img src="https://picsum.photos/1000/300/?image=1080" />
							<img src="https://picsum.photos/1000/300/?image=1075" />
							<img src="https://picsum.photos/1000/300/?image=1072" /> */}

							{/* {this.state.home_slider.map((slider_img) => (
								<img
									style={{
										flex: 1,
										width: 1000,
										height: 300,
										objectFit: 'cover'
									}}
									src={slider_img.IMAGE}
								/>
							))} */}
						</Flickity>
					</Grid>
					<Grid item xs={12}>
						<div style={{ padding: 10 }}>
							<Flickity
								elementType={'div'} // default 'div'
								options={{
									initialIndex: 2,
									freeScroll: false,
									contain: true,
									prevNextButtons: false,
									pageDots: false,
									autoPlay: true
								}} // takes flickity options {}
								disableImagesLoaded={false} // default false
								reloadOnUpdate // default false
							>
								<EventDetailModal
									eventName={'Newar'}
									trigger={<Item Text="Hello" onClick={() => {}} />}
								/>
								<EventDetailModal
									eventName={'baun'}
									trigger={<Item Text="Hello" onClick={() => {}} />}
								/>
								<EventDetailModal
									eventName={'vhetri'}
									trigger={<Item Text="Hello" onClick={() => {}} />}
								/>
								<EventDetailModal
									eventName={'sdf'}
									trigger={<Item Text="Hello" onClick={() => {}} />}
								/>
								<EventDetailModal
									eventName={'baun'}
									trigger={<Item Text="Hello" onClick={() => {}} />}
								/>
								<EventDetailModal
									eventName={'vhetri'}
									trigger={<Item Text="Hello" onClick={() => {}} />}
								/>
								<EventDetailModal
									eventName={'sdf'}
									trigger={<Item Text="Hello" onClick={() => {}} />}
								/>
							</Flickity>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}
