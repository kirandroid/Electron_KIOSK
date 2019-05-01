import { Grid, Paper } from "@material-ui/core";
import Item from "../../component/Item";
import React, { Component } from "react";
import Flickity from "react-flickity-component";
import EventCard from "../../component/card";
import { events } from "../../../store/data";

export default class Event extends Component {
  render() {
    return (
      // <Grid container spacing={12} direction={"column"}>
      <div style={{ flexGrow: 1, padding: 10 }}>
        <Grid container>
          {events.map(event => (
            <Grid item xs={3} style={{ padding: 5 }}>
              <EventCard
                title={event.title}
                image={event.image}
                content={event.content}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
