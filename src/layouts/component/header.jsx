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
	MenuItem
} from '@material-ui/core';
import { Search, Notifications } from '@material-ui/icons';
import UserAvatar from 'react-user-avatar';
import { Dropdown, Image } from 'semantic-ui-react';
import LoadingModal from '../component/loadingModal';
import AuthModal from '../component/authModal';

import Pouchdb from 'pouchdb-browser';
var userdb = Pouchdb('user');

const remote = require('electron').remote;

const style = {
	header: {
		flex: 1
	},
	logo: {
		flex: 1
	},
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
	render() {
		return (
			<div>
				<AppBar position="static" color="default" style={{ elevation: 0 }}>
					<Toolbar style={style.header}>
						<Typography variant="h6" color="inherit" style={style.logo}>
							KIOSK
						</Typography>
						<Paper style={style.root} elevation={1}>
							<InputBase
								style={style.input}
								placeholder="Search for some awesome Events and Programmes!!"
							/>
							<IconButton style={style.iconButton} aria-label="Search">
								<Search />
							</IconButton>
						</Paper>
						<IconButton>
							<Badge badgeContent={40} color="secondary" max={99}>
								<Notifications />
							</Badge>
						</IconButton>
						{/* <Dropdown
							trigger={
								<UserAvatar
									size="48"
									name={this.props.fullname}
									src={this.props.profilePic}
									style={style.avatar}
								/>
							}
						>
							 <Dropdown.Menu>
      <Dropdown.Item text='New' />
	  </Dropdown.Menu>
							</Dropdown> */}

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
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
