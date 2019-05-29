import React from 'react';
import { Card, Icon, Header, Image, Modal } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';

export default class ActivityCard extends React.Component {
	render() {
		return (
			<Card>
				<Image
					src={this.props.image}
					style={{
						height: 200,
						backgroundSize: 'cover'
					}}
				/>
				<Card.Content>
					<Card.Header>{this.props.title}</Card.Header>
					<Card.Description>
						<LinesEllipsis
							text={this.props.content}
							maxLine="3"
							ellipsis="..."
							trimRight
							basedOn="letters"
						/>
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}
