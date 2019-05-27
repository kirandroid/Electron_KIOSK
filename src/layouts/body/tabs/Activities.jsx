import React, { Component } from "react";
import Sports from "./ActivitiesTab/Sports";
import Club from "./ActivitiesTab/Club";
import Community from "./ActivitiesTab/Community";
import AddActivity from "./ActivitiesTab/AddActivity";
import axios from "axios";
import { apiurl } from "../../../store/data";
import { Tab } from "semantic-ui-react";

import AddActivityModal from "../../component/addActivityModal";
import { Button } from "@material-ui/core";

export default class Activities extends Component {
  render() {
    const generalActivity = [
      {
        menuItem: "Sports",
        render: () => <Sports />
      },
      { menuItem: "Club", render: () => <Club /> },
      { menuItem: "Community", render: () => <Community /> }
    ];
    const adminActivity = [
      {
        menuItem: "Sports",
        render: () => <Sports />
      },
      { menuItem: "Club", render: () => <Club /> },
      { menuItem: "Community", render: () => <Community /> },
      {
        menuItem: (
          <div style={{ justifyContent: "center", display: "flex" }}>
            <AddActivityModal
              trigger={
                <Button variant="contained" color="secondary">
                  Add Activity
                </Button>
              }
            />
          </div>
        )
      }
    ];
    return (
      <div>
        <Tab
          menu={{ fluid: true, vertical: true, tabular: true }}
          panes={
            this.props.role == "Admin"
              ? adminActivity
              : this.props.role == "Guest" || "Student"
              ? generalActivity
              : generalActivity
          }
        />
      </div>
    );
  }
}
