import { Grid, Paper, Typography, Button, Modal } from '@material-ui/core';
import Item from '../../component/Item';
import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import axios from 'axios';
import { apiurl } from '../../../store/data';
import AddNewsNoticeModal from '../../component/addNewsNoticeModal';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			newsNotices: [],
			home_slider: [],
			test: [
				{
					IMAGE:
						'https://pic.001all.com/Wallpaper/Desktop%20Wallpaper/Sports/FTP/1366%20x%20768/College%20basketball%20hot%20wallpapers%201366%20x%20768%20Pixels%20Resolution.jpg'
				},
				{
					IMAGE:
						'https://patancollege.https://live-beds-uni-cdnep.azureedge.net/live-beds-uni-media/266390/breeam-thumbnail.jpg.np/wp-content/uploads/2019/05/sports-day-00022.jpg'
				},
				{
					IMAGE: 'https://patancollege.edu.np/wp-content/uploads/2018/07/image055.jpg'
				},
				{
					IMAGE: 'https://images6.alphacoders.com/427/thumb-1920-427408.jpg'
				},
				{
					IMAGE: 'https://patancollege.edu.np/wp-content/uploads/2019/04/PCPS-SW19-BB-00012.jpg'
				},
				{
					IMAGE: 'https://patancollege.edu.np/wp-content/uploads/2019/04/PCPS-SW19-BB-00004.jpg'
				},
				{
					IMAGE: 'https://patancollege.edu.np/wp-content/uploads/2018/12/image00007.jpeg'
				}
			]
		};
		this.fetchData();
	}

	// componentWillReceiveProps(newprops) {
	// 	if (newprops) {
	// 		this.fetchData();
	// 		console.log('Fetched');
	// 	} else {
	// 		console.log('Not');
	// 	}
	// }

	// componentDidMount() {
	// this.fetchData();
	// 	axios
	// 		.get(apiurl + `/api/newsnotice`)
	// 		.then((res) => {
	// 			const newsNotices = res.data;
	// 			console.log(res.data);
	// 			this.setState({ newsNotices });
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }

	fetchData() {
		axios.get(apiurl + `/api/newsnotice`).then((res) => {
			const newsNotices = res.data;
			console.log(res.data);
			this.setState({ newsNotices });
		});
	}

	render() {
		return (
			<div>
				<Grid container spacing={12} direction={'column'}>
					<Grid item xs={12}>
						<Flickity
							options={{
								initialIndex: 1,
								freeScroll: false,
								contain: true,
								prevNextButtons: false,
								pageDots: false,
								autoPlay: true,
								imagesLoaded: true
							}} // takes flickity options {}
							reloadOnUpdate={true} // default false
						>
							{this.state.test.map((slider) => (
								<img
									style={{
										flex: 1,
										width: null,
										height: 400,
										objectFit: 'cover'
									}}
									src={slider.IMAGE}
								/>
							))}
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
					<div style={{ padding: 10 }}>
						<Grid container direction="row" justify="space-between" alignItems="center">
							<Typography variant="h5" component="h2">
								News And Notice
							</Typography>
							{this.props.role == 'Admin' ? (
								<AddNewsNoticeModal
									trigger={
										<Button
											type="submit"
											variant="contained"
											color="primary"
											style={{ marginRight: '10px' }}
											onClick={() => {
												console.log('YOYOYOY');
											}}
										>
											Add Item
										</Button>
									}
								/>
							) : null}
						</Grid>
					</div>
					<Grid item xs={12}>
						<div style={{ padding: 10 }}>
							<Flickity
								elementType={'div'}
								options={{
									freeScroll: true,
									contain: true,
									prevNextButtons: false,
									pageDots: false,
									autoPlay: true
								}}
								reloadOnUpdate={true} // default false
							>
								{this.state.newsNotices.map((data) => (
									<Item
										title={data.NN_TITLE}
										desc={data.NN_DESC}
										created={data.CREATED_AT}
										type={data.TYPE}
										onClick={() => {
											console.log('Cliacked');
										}}
									/>
								))}
							</Flickity>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}
