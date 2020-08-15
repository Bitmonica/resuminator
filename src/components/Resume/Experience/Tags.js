import React from "react";
import { Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingBottom: 10 
  },
  root: {
    backgroundColor: "#44318D",
    color: "#fffefa",
    margin: 2,
    opacity: 0.5,
  },
});

function Tags(props) {
  const classes = useStyles();
  let key = 0;
  const tags = props.tags;
  return (
    <div className={classes.main}>
      {tags.map((item) => {
        ++key;
        return (
          <Chip key={key} className={classes.root} size="small" label={item} />
        );
      })}
    </div>
  );
}

export default Tags;
