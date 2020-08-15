import React from "react";
import "./Resume.css";
import Title from "./Title/Title";
import ColoredLine from "../Line";
import Contact from "./Title/Contact";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import { makeStyles } from "@material-ui/core";
import Projects from "./Projects";
import Skills from "./Skills";

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    zoom: 1.35,
    width: 595,
    height: 842,
    backgroundColor: "#fffffe",
    fontFamily: "Karla",
    margin: 25,
    right: 0,
  },
  left: {
    //width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
  },
  right: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
  },
  inside: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  watermark: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    position: "relative",
    padding: 5,
    fontSize: 7.5,
    opacity: 0.5
  },
  logo: {
    paddingLeft: 2,
    fontWeight: 600
  }
});

function Resume(props) {
  const classes = useStyles();
  const defaultConfig = `${classes.root} shadow`

  return (
    <div id="resume-paper" className={props.config ? props.config : defaultConfig}>
      <Title name="Vivek Nigam" jobTitle="Software Developer | ML Engineer" />
      <Contact />
      <ColoredLine color="#44318D" />
      <div id="resume-insider" className={classes.inside}>
        <div className={classes.left}>
          <Experience />
          <Education />
          <Certifications />
        </div>
        <div className={classes.right}>
          <Skills />
          <Projects />
        </div>
      </div>
      <div id="watermark" className={classes.watermark}>
        Built using <span className={classes.logo}>Resuminator</span>
      </div>
    </div>
  );
}

export default Resume;
