import React from "react";
import {
  Header,
  Image,
  Modal,
  Divider,
  Grid,
  Segment,
  Form,
  Button,
  Icon
} from "semantic-ui-react";
import { TextField } from "@material-ui/core";
import axios from "axios";

export default class EventDetailModal extends React.Component {
  render() {
    return (
      <Modal trigger={this.props.trigger}>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Modal.Description>
            <Header>Modal Header</Header>
            <p>
              This is an example of expanded content that will cause the modal's
              dimmer to scroll
            </p>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name="right chevron" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
