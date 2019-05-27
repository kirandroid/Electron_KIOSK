import React, { Component } from "react";
import Bank from "./ServicesTab/Bank";
import Hospital from "./ServicesTab/Hospital";
import Partner from "./ServicesTab/Partners";
import { Tab } from "semantic-ui-react";
import AddServiceModal from "../../component/addServiceModal";
import { Button } from "@material-ui/core";

export default class Services extends Component {
  render() {
    const generalService = [
      {
        menuItem: "Bank",
        render: () => <Bank />
      },
      { menuItem: "Hospital", render: () => <Hospital /> },
      { menuItem: "Partner", render: () => <Partner /> }
    ];
    const adminService = [
      {
        menuItem: "Bank",
        render: () => <Bank />
      },
      { menuItem: "Hospital", render: () => <Hospital /> },
      { menuItem: "Partner", render: () => <Partner /> },
      {
        menuItem: (
          <div style={{ justifyContent: "center", display: "flex" }}>
            <AddServiceModal
              trigger={
                <Button variant="contained" color="secondary">
                  Add Service
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
              ? adminService
              : this.props.role == "Guest" || "Student"
              ? generalService
              : generalService
          }
        />
      </div>
    );
  }
}
