import { Grid, Paper } from "@material-ui/core";
import Item from "../../component/Item";
import React, { Component } from "react";
import Flickity from "react-flickity-component";
import axios from "axios";
import EventDetailModal from "../../component/eventDetailModal";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home_slider: [],
      test: [
        {
          IMAGE:
            "https://patancollege.edu.np/wp-content/uploads/2019/05/sports-day-00040.jpg"
        },
        {
          IMAGE:
            "https://patancollege.edu.np/wp-content/uploads/2019/05/sports-day-00022.jpg"
        },
        {
          IMAGE:
            "https://patancollege.edu.np/wp-content/uploads/2019/05/sports-day-00083.jpg"
        },
        {
          IMAGE:
            "https://patancollege.edu.np/wp-content/uploads/2018/05/IMG-20180411-WA0017.jpg"
        },
        {
          IMAGE:
            "https://patancollege.edu.np/wp-content/uploads/2019/04/PCPS-SW19-BB-00012.jpg"
        },
        {
          IMAGE:
            "https://patancollege.edu.np/wp-content/uploads/2019/04/PCPS-SW19-BB-00004.jpg"
        },
        {
          IMAGE:
            "https://patancollege.edu.np/wp-content/uploads/2018/12/image00007.jpeg"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Grid container spacing={12} direction={"column"}>
          <Grid item xs={12}>
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
              reloadOnUpdate={true} // default false
            >
              {this.state.test.map(slider => (
                <img
                  style={{
                    flex: 1,
                    width: null,
                    height: 300,
                    objectFit: "cover"
                  }}
                  src={slider.IMAGE}
                />
              ))}
              {/* <img src="https://picsum.photos/1000/300/?image=1080" />
							<img src="https://picsum.photos/1000/300/?image=1075" />
							<img src="https://picsum.photos/1000/300/?image=1072" /> */}

              {/* {this.state.home_slider.map((slider_img) => (
								<img
									style={{
										flex: 1,
										width: 1000,
										height: 300,
										objectFit: 'cover'
									}}
									src={slider_img.IMAGE}
								/>
							))} */}
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
                <Item
                  Text="“Don't cry because it's over, smile because it happened.” 
― Dr. Seuss"
                  onClick={() => {}}
                />
                <Item
                  Text="“So many books, so little time.” 
				  ― Frank Zappa"
                  onClick={() => {}}
                />
                <Item
                  Text="“If you tell the truth, you don't have to remember anything.” 
				  ― Mark Twain"
                  onClick={() => {}}
                />
                <Item
                  Text="“To live is the rarest thing in the world. Most people exist, that is all.” 
				  ― Oscar Wilde"
                  onClick={() => {}}
                />
                <Item
                  Text="“Be yourself; everyone else is already taken.” 
				  ― Oscar Wilde"
                  onClick={() => {}}
                />
              </Flickity>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
