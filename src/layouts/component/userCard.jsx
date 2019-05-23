import React from 'react';
import { CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@material-ui/core';
import { People } from '@material-ui/icons';
import { Card, Icon, Header, Image, Modal } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Edit, Delete } from '@material-ui/icons';
import moment from 'moment';

export default class UserCard extends React.Component {
	render() {
		return (
			// <Card style={{ maxWidth: 345 }}>
			// 	<CardActionArea>
			// 		<CardMedia style={{ height: 140 }} image={this.props.image} />
			// 		<CardContent>
			// 			<Typography gutterBottom variant="h5" component="h2">
			// 				{this.props.title}
			// 			</Typography>
			// 			<Typography component="p">
			// 				<LinesEllipsis
			// 					text={this.props.content}
			// 					maxLine="1"
			// 					ellipsis="..."
			// 					trimRight
			// 					basedOn="letters"
			// 				/>
			// 			</Typography>
			// 		</CardContent>
			// 	</CardActionArea>
			// 	<CardActions>
			// 		<Button size="small" color="primary">
			// 			<People />
			// 			12 Seat Left!
			// 		</Button>
			// 	</CardActions>
			// </Card>

			// <Card style={{ display: "flex" }}>
			//   <CardMedia style={{ width: 151 }} image={this.props.image} />
			//   <div style={{ display: "flex", flexDirection: "column" }}>
			//     <CardContent style={{ flex: "1 0 auto" }}>
			//       <Typography component="h5" variant="h5">
			//         {this.props.title}
			//       </Typography>
			//       <Typography variant="subtitle1" color="textSecondary">
			//         {moment(Date.now()).fromNow()}
			//       </Typography>
			//     </CardContent>
			//     <div
			//       style={{
			//         display: "flex",
			//         alignItems: "center",
			//         paddingLeft: 10,
			//         paddingBottom: 10
			//       }}
			//     >
			//   <IconButton aria-label="Previous">
			//     <AccessAlarm />
			//   </IconButton>
			//   <IconButton aria-label="Play/pause">
			//     <AccessAlarmTwoTone style={{ height: 38, width: 38 }} />
			//   </IconButton>
			//   <IconButton aria-label="Next">
			//     <AcUnitRounded />
			//   </IconButton>
			//     </div>
			//   </div>
			// </Card>
			<Card>
				<Image src={this.props.image} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{this.props.title}</Card.Header>
					<Card.Meta>
						<span className="date">Joined {moment(this.props.joined).fromNow()}</span>
					</Card.Meta>
					<Card.Description>{this.props.content}</Card.Description>
				</Card.Content>
				<Card.Content>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							height: 25
						}}
					>
						<IconButton>
							<Edit style={{ height: 22, width: 22 }} />
						</IconButton>
						<IconButton>
							<Delete style={{ height: 22, width: 22 }} />
						</IconButton>
					</div>
				</Card.Content>
			</Card>
		);
	}
}
