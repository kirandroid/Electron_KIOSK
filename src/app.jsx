import React from "react";
import Header from "./layouts/component/header";
// import Tab from "./layouts/body/tab";
import Home from "./layouts/body/tabs/Home";
import Event from "./layouts/body/tabs/Event";
// import { tabs } from "../src/store/data";
import { Button, Tab } from "semantic-ui-react";
import card from "./layouts/component/card";
import { truncateSync } from "fs";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { adminUser: true };
  }
  render() {
    const adminPanes = [
      {
        menuItem: "Home",
        render: () => <Home />
      },
      { menuItem: "Event", render: () => <Event /> },
      { menuItem: "Bookings", render: () => <Tab.Pane>Study SCREEN</Tab.Pane> },
      { menuItem: "User", render: () => <Tab.Pane>Profile SCREEN</Tab.Pane> }
    ];

    const user = [
      {
        menuItem: "Home",
        render: () => <Home />
      },
      { menuItem: "Event", render: () => <Event /> },
      { menuItem: "Bookings", render: () => <Tab.Pane>Study SCREEN</Tab.Pane> },
      { menuItem: "Profile", render: () => <Tab.Pane>Profile SCREEN</Tab.Pane> }
    ];

    return (
      <div>
        <Header />
        <Tab panes={this.state.adminUser ? adminPanes : user} />
      </div>
    );
  }
}
