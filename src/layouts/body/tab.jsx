import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default ({ tabs, category, onSelect }) => {
  const index = category ? tab.findIndex(group => group === category) + 1 : 0;

  return (
    <div>
      <Paper>
        <Tabs
          value={index}
          onChange={(e, index) => {
            onSelect(index === 0 ? "" : tab[index - 1]);
          }}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {tabs.map(group => (
            <Tab label={group} />
          ))}
        </Tabs>
      </Paper>
    </div>
  );
};
