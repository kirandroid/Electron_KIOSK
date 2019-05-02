import React from "react";
import {
  Header,
  Image,
  Modal,
  Divider,
  Grid,
  Segment
} from "semantic-ui-react";
import { TextField } from "@material-ui/core";

export default class AuthModal extends React.Component {
  render() {
    return (
      <Modal trigger={this.props.trigger}>
        <Modal.Content>
          <Modal.Description>
            <Segment placeholder>
              <Grid columns={2} stackable textAlign="center">
                <Divider vertical>Or</Divider>

                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
