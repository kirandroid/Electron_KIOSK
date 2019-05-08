import React from "react";
import {
  Header,
  Image,
  Modal,
  Divider,
  Grid,
  Segment,
  Form,
  Button
} from "semantic-ui-react";
import { TextField } from "@material-ui/core";
import axios from "axios";

export default class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "jj",
      password: "ll"
    };
  }

  signIn() {
    console.log("Start");
    axios
      .post("http://kioskapi.tk:4000/api/login", {
        USERNAME: this.state.username,
        PASSWORD: this.state.password
      })
      .then(response => {
        console.log("Okay");
      })
      .catch(error => {
        console.log("No");
      });
  }

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
                    <Form>
                      <Form.Input
                        icon="user"
                        iconPosition="left"
                        label="Username"
                        onChange={e =>
                          this.setState({
                            username: e.target.value
                          })
                        }
                        placeholder="Username"
                      />
                      <Form.Input
                        icon="lock"
                        iconPosition="left"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        onChange={e =>
                          this.setState({
                            password: e.target.value
                          })
                        }
                      />

                      <Button
                        content="Login"
                        primary
                        onClick={() => {
                          axios
                            .post("http://kioskapi.tk:4000/api/login", {
                              USERNAME: this.state.username,
                              PASSWORD: this.state.password
                            })
                            .then(response => {
                              console.log(response);
                            })
                            .catch(error => {
                              console.log(error);
                            });
                        }}
                      />
                    </Form>
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
