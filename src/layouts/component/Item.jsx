import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { gradient } from "../../store/data";

export default ({ Text, onClick }) => (
  <Paper
    style={{
      margin: 10,
      height: 90,
      width: "20%",
      background: gradient[Math.floor(Math.random() * gradient.length)],
      textAlign: "center"
    }}
    onClick={onClick}
  >
    <Typography component="p" style={{ padding: "10px" }}>
      {Text}
    </Typography>
  </Paper>
);
