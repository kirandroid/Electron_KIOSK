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

class Header extends React.Component {
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
						<UserAvatar size="48" name="Kiran Pradhan" src="" style={style.avatar} />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default Header;
// <Button variant="contained" onClick={() => console.log('Clickeds')}>
// 					{' '}
// 					Hello
// 				</Button>
