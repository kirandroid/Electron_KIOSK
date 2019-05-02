import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { People } from "@material-ui/icons";
import AuthModal from "../component/authModal";
import { Header, Image, Modal } from "semantic-ui-react";

export default class EventCard extends React.Component {
  render() {
    return (
      <Card style={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia style={{ height: 140 }} image={this.props.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">{this.props.content}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* To call a Signup Modal when clicked semantic needs to pass a trigger, so here the trigger is the button */}
          <AuthModal
            trigger={
              <Button size="small" color="primary">
                Book
              </Button>
            }
          />
          <Button size="small" color="primary">
            <People />
            12 Seat Left!
          </Button>
        </CardActions>
      </Card>
    );
  }
}
