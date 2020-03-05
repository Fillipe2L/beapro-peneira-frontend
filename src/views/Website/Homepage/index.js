/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Background from "../../../assets/img/background-website.jpg";
import beaproLogo from "assets/img/beapro_simbolo_branco.png";

import { MdGamepad, MdFlag, MdTrendingUp } from "react-icons/md";
const styles = {
  header: {
    color: "#FFF",
    boxShadow: "none",
    paddingTop: "25px",
    backgroundColor: "transparent !important",
    width: "100%",
    padding: "0.625rem 0",
    flexFlow: "row rowrap",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    borderRadius: "3px",
    marginBottom: "20px",
    justifyContent: "flex-start"
  },
  toolbarStyle: {
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    minHeight: "50px",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    justifyContent: "space-between"
  },
  backgroundImage: {
    background: `linear-gradient(to right, #4f68ad, #020423d9),url(${Background})`,
    height: "95vh",
    overflow: "hidden",
    transform: "translate3d(0px,0px,0px)",
    display: "flex",
    padding: "0",
    position: "relative",
    maxHeight: "1600px",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "50%"
  },
  heroContent: {
    width: "100%",
    zIndex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  heroItem: {
    width: "100%",
    position: "relative",
    minHeight: "1px",
    paddingLeft: "15px",
    paddingRight: "15px",
    "& h1": {
      display: "inline-block",
      position: "relative",
      fontSize: "4.2rem",
      fontWeight: 600
    },
    "& h3": {
      color: "#fff",
      marginTop: "30px",
      minHeight: "32px",
      fontWeight: 500,
      marginBottom: "25px",
      textDecoration: "none"
    }
  },
  brandLogo: {
    "& a": {
      color: "#fff",
      fontSize: "18px",
      minWidth: "unset",
      fontWeight: 300,
      lineHeight: "30px",
      whiteSpace: "nowrap",
      borderRadius: "3px",
      textTransform: "none"
    }
  },
  container: {
    margin: "-60px 30px 0px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
    zIndex: 3,
    position: "relative",
    background: "#fff"
  },
  firstSection: {
    padding: "70px 0px",
    backgroundSize: "cover",
    backgroundPosition: "50%"
  },
  textContent: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  detailSection: {
    width: "auto",
    marginLeft: "-15px",
    marginRight: "-15px"
  },
  detailItem: {
    width: "100%",
    position: "relative",
    minHeight: "1px",
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  detailIcon: {
    float: "none",
    marginTop: "24px",
    marginRight: "10px",
    transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
  },
  detailText: {
    color: "#999",
    overflow: "hidden",
    "& h4": {
      color: "#3c4858",
      margin: "1.75rem 0 0.875rem !important",
      marginTop: "30px",
      minHeight: "unset",
      fontWeight: 700,
      marginBottom: "25px",
      textDecoration: "none"
    }
  }
};

const useStyles = makeStyles(styles);

export default function Homepage() {
  const classes = useStyles();

  return (
    <>
      <AppBar
        component="header"
        position="fixed"
        className={classes.header}
        color="primary"
      >
        <Toolbar disableGutters={false} className={classes.toolbarStyle}>
          <Button variant="text" className={classes.brandLogo}>
            <Link to="/">Be a Pro</Link>
          </Button>

          <div>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Paper className={classes.backgroundImage}>
        <div className={classes.heroContent}>
          <Grid
            container
            style={{ width: "auto", marginLeft: "-15px", marginRight: "-15px" }}
          >
            <Grid className={classes.heroItem} item>
              <div style={{ color: "#fff", textAlign: "center" }}>
                <h1>
                  Participe da peneira <br />
                  <b>BE A PRO</b>
                </h1>
                <h3>
                  Dê start na sua trajetória rumo ao hall da fama do esports.
                </h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <div className={classes.container}>
        <div className={classes.firstSection}>
          <div className={classes.textContent}>
            <Grid container justify={"center"}>
              <Grid item sm={8} md={8}>
                <h4
                  style={{
                    color: "#999",
                    textAlign: "center",
                    fontSize: "1.5em"
                  }}
                >
                  A <b>Be a Pro</b> está em busca dos próximos campeões de
                  &nbsp;
                  <b>LoL</b>, &nbsp;<b>CS:GO</b>&nbsp; ou <b>Fortnite</b>. Pra
                  isso você vai poder participar da nossa peneira{" "}
                  <b>
                    <u>GRATUITAMENTE!</u>
                  </b>{" "}
                  <br /> Suas habilidades serão avaliadas através de entrevistas
                  e pelo seu ranking no Be A Pro. Você também vai poder
                  participar de campeonatos com olheiros de grandes times que
                  estarão te acompanhando de perto.
                </h4>
              </Grid>
            </Grid>
            <div
              style={{
                textAlign: "center",
                paddingTop: "30px",
                paddingBottom: "30px"
              }}
            >
              <Grid container className={classes.detailSection}>
                <Grid item sm={4} md={4} className={classes.detailItem}>
                  <div
                    style={{
                      margin: "0 auto",
                      padding: "70px 0 30px",
                      maxWidth: "360px"
                    }}
                  >
                    <div className={classes.detailIcon}>
                      <MdGamepad
                        style={{
                          width: "61px",
                          height: "61px",
                          fontSize: "2.25rem",
                          color: "#4F68AD"
                        }}
                      />
                    </div>
                    <div className={classes.detailText}>
                      <h4>Treine para se tornar PRO</h4>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent sodales lacus sed quam sodales lobortis eu at
                        ante. Mauris eu accumsan lacus. Sed metus sem, interdum
                        eu tempus ac, bibendum at neque. In velit velit,
                        tincidunt ultricies aliquam at, sollicitudin eget diam.
                        Cras in risus eget purus sagittis pellentesque.
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={4} md={4} className={classes.detailItem}>
                  <div
                    style={{
                      margin: "0 auto",
                      padding: "70px 0 30px",
                      maxWidth: "360px"
                    }}
                  >
                    <div className={classes.detailIcon}>
                      <MdFlag
                        style={{
                          width: "61px",
                          height: "61px",
                          fontSize: "2.25rem",
                          color: "#2BBE79"
                        }}
                      />
                    </div>
                    <div className={classes.detailText}>
                      <h4>Participe de campeonatos</h4>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent sodales lacus sed quam sodales lobortis eu at
                        ante. Mauris eu accumsan lacus. Sed metus sem, interdum
                        eu tempus ac, bibendum at neque. In velit velit,
                        tincidunt ultricies aliquam at, sollicitudin eget diam.
                        Cras in risus eget purus sagittis pellentesque.
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={4} md={4} className={classes.detailItem}>
                  <div
                    style={{
                      margin: "0 auto",
                      padding: "70px 0 30px",
                      maxWidth: "360px"
                    }}
                  >
                    <div className={classes.detailIcon}>
                      <MdTrendingUp
                        style={{
                          width: "61px",
                          height: "61px",
                          fontSize: "2.25rem",
                          color: "#ff3434"
                        }}
                      />
                    </div>
                    <div className={classes.detailText}>
                      <h4>Cresça no mundo dos eSports</h4>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent sodales lacus sed quam sodales lobortis eu at
                        ante. Mauris eu accumsan lacus. Sed metus sem, interdum
                        eu tempus ac, bibendum at neque. In velit velit,
                        tincidunt ultricies aliquam at, sollicitudin eget diam.
                        Cras in risus eget purus sagittis pellentesque.
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
