import React from 'react';
import { Modal, Loader } from 'semantic-ui-react';

export default class LoadingModal extends React.Component {
	render() {
		return (
			<div>
				<Modal trigger={this.props.trigger} basic size="mini" onClose={false}>
					<Modal.Content>
						<Loader content="Loading" />
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}
