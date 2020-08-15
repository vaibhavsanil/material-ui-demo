import React from "react";
import "./styles.css";
import { Button, Typography } from "@material-ui/core";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "30px",
  },
  buttonStyles: {
    color: "blue",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography
        className={classes.helloThereStyle}
        color="primary"
        variant="h1"
      >
        Hello There
      </Typography>
      {/* <h1>Hello There</h1> */}
      <Button
        className={classes.buttonStyles}
        color="secondary"
        variant="outlined"
      >
        This is our first Button
      </Button>
    </div>
  );
}

export default App;
