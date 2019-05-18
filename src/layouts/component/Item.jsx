import React from "react";
import { Paper } from "@material-ui/core";
import { gradient } from "../../store/data";

export default ({ Text, onClick }) => (
  <Paper
    style={{
      padding: 40,
      margin: 10,
      height: 70,
      width: "20%",
      background: gradient[Math.floor(Math.random() * gradient.length)],
      textAlign: "center"
    }}
    onClick={onClick}
  >
    {Text}
  </Paper>
);
