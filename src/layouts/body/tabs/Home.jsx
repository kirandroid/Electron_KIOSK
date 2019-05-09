import { Grid, Paper } from "@material-ui/core";
import Item from "../../component/Item";
import React, { Component } from "react";
import Flickity from "react-flickity-component";
import EventDetailModal from "../../component/eventDetailModal";
import { gradient } from "../../../store/data";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={8} direction={"column"}>
          <Grid item xs={12}>
            <Flickity
              elementType={"div"} // default 'div'
              options={{
                initialIndex: 2,
                freeScroll: false,
                contain: true,
                prevNextButtons: false,
                pageDots: false,
                autoPlay: true,
                wrapAround: true
              }} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
            >
              <img src="https://picsum.photos/1000/300/?image=1080" />
              <img src="https://picsum.photos/1000/300/?image=1075" />
              <img src="https://picsum.photos/1000/300/?image=1072" />
            </Flickity>
          </Grid>
          <Grid item xs={12}>
            <div style={{ padding: 10 }}>
              <Flickity
                elementType={"div"} // default 'div'
                options={{
                  initialIndex: 2,
                  freeScroll: false,
                  contain: true,
                  prevNextButtons: false,
                  pageDots: false,
                  autoPlay: true
                }} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
              >
                <EventDetailModal
                  trigger={
                    <Paper
                      style={{
                        padding: 40,
                        margin: 10,
                        height: 70,
                        width: "20%",
                        background:
                          gradient[Math.floor(Math.random() * gradient.length)],
                        textAlign: "center"
                      }}
                    >
                      "Left"
                    </Paper>
                  }
                />

                <Item Text="Right" />
                <Item Text="Right" />
                <Item Text="Right" />
                <Item Text="Right" />
                <Item Text="Right" />
                <Item Text="Right" />
              </Flickity>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
