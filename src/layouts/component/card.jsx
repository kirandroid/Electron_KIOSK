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
          <Button size="small" color="primary">
            Hello
          </Button>
          <Button size="small" color="primary">
            Bye
          </Button>
        </CardActions>
      </Card>
    );
  }
}
