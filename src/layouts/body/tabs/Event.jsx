import { Grid, Paper, CircularProgress } from "@material-ui/core";
import Item from "../../component/Item";
import React, { Component } from "react";
import Flickity from "react-flickity-component";
import EventCard from "../../component/card";
import { events } from "../../../store/data";
import axios from "axios";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get(`http://kioskapi.tk:4000/api/users`).then(res => {
      const photos = res.data;
      console.log(res.data);
      this.setState({ photos, loading: false });
    });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <div
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <CircularProgress color="secondary" style={{ margin: "50" }} />
          </div>
        ) : (
          <div style={{ flexGrow: 1, padding: 10 }}>
            <Grid container>
              {this.state.photos.slice(0, 15).map(event => (
                <Grid item xs={3} style={{ padding: 5 }} key={event.id}>
                  <EventCard
                    title={event.FIRSTNAME + " " + event.LASTNAME}
                    image={
                      "https://patancollege.edu.np/wp-content/uploads/2018/12/sd.png"
                    }
                    content={event.USERNAME}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div>
    );
  }
}
