import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Paper,
	InputBase,
	IconButton,
	Badge,
	Menu,
	MenuItem,
	Grid
} from '@material-ui/core';
import { Search, Notifications } from '@material-ui/icons';
import UserAvatar from 'react-user-avatar';
import { Dropdown, Image } from 'semantic-ui-react';
import LoadingModal from '../component/loadingModal';
import AuthModal from '../component/authModal';
import SearchModal from '../component/searchModal';

import Pouchdb from 'pouchdb-browser';
var userdb = Pouchdb('user');

const remote = require('electron').remote;

const style = {
	root: {
		flex: 6,
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 750,
		marginLeft: 50
	},
	input: {
		marginLeft: 8,
		flex: 1
	},
	iconButton: {
		padding: 10
	},
	avatar: {
		flex: 1,
		alignItems: 'center',
		justifyContents: 'center',
		marginLeft: 20
	}
};

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
	}
	render() {
		return (
			<div>
				<AppBar position="static" color="#fff" style={{ elevation: 0 }}>
					<Toolbar>
						<Grid container direction="row" justify="space-between" alignItems="center">
							{/* <Typography variant="h6" color="inherit" style={style.logo}>
								KIOSK
							</Typography> */}
							<div>
								<Image
									src="https://lh3.googleusercontent.com/1_Hzer-EW36Y0gfOdhpWwIgyusDEcFocH3f4GWiFJaPxCqrZl3x4udSZFf8nXgOb425fvA96eEt0AgyE5bo9vA=s0"
									size="small"
									centered
								/>
							</div>
							<Paper style={style.root} elevation={1}>
								<InputBase
									onChange={(e) =>
										this.setState({
											title: e.target.value
										})}
									style={style.input}
									placeholder="Search for some awesome Events and Programmes!!"
								/>
								<SearchModal
									searchTitle={this.state.title}
									trigger={
										<IconButton style={style.iconButton} aria-label="Search" onClick={() => {}}>
											<Search />
										</IconButton>
									}
								/>
							</Paper>

							<Dropdown
								trigger={
									<UserAvatar
										size="48"
										name={this.props.fullname}
										src={this.props.profilePic}
										style={style.avatar}
									/>
								}
								pointing="top right"
								icon={null}
							>
								<Dropdown.Menu>
									{this.props.role == 'Guest' ? (
										<AuthModal
											openModal={true}
											trigger={
												<div style={{ padding: 10 }}>
													<Dropdown.Item text="Sign In" onClick={() => {}} />
												</div>
											}
										/>
									) : (
										<LoadingModal
											trigger={
												<div style={{ padding: 10 }}>
													<Dropdown.Item
														text="Sign Out"
														onClick={() => {
															userdb.get('user').then(function(doc) {
																return userdb.remove(doc);
															});
															var views = remote.getCurrentWindow();
															views.loadFile(`src/index.html`);
														}}
													/>
												</div>
											}
										/>
									)}
								</Dropdown.Menu>
							</Dropdown>
						</Grid>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
