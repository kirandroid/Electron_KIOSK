import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { gradient } from '../../store/data';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import NoticeModal from '../component/noticeModal';
import moment from 'moment';
import LinesEllipsis from 'react-lines-ellipsis';

export default ({ title, desc, created, type, onClick }) => (
	<Card
		style={{
			width: '28%',
			height: 200,
			marginLeft: 10,
			marginRight: 10,
			background: gradient[Math.floor(Math.random() * gradient.length)],
			textAlign: 'center'
		}}
	>
		<CardContent style={{ height: '80%' }}>
			<Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
				{type}
			</Typography>
			<Typography variant="h5" component="h2">
				{title}
			</Typography>
			<Typography style={{ marginBottom: 12 }} color="textSecondary">
				{moment(created).fromNow()}
			</Typography>
			<Typography variant="body2" component="p">
				<LinesEllipsis text={desc} maxLine="4" ellipsis="..." trimRight basedOn="letters" />
			</Typography>
		</CardContent>
		<CardActions>
			<NoticeModal
				title={title}
				desc={desc}
				created={created}
				type={type}
				trigger={
					<Button size="small" onClick={onClick}>
						Read More
					</Button>
				}
			/>
		</CardActions>
	</Card>
);
