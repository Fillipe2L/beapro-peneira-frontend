import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import "bootstrap/dist/css/bootstrap.css";
import beaproBranca from "assets/img/beapro_logo_branca_total.png";

const styles = {
  headerWithBackground: {
    backgroundColor: "#4F68AD",
    color: "#FFF",
    boxShadow: "none",
    width: "100%",
    padding: "0.250rem 0",
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
  loginContainer: { width: "500px !important", padding: "15px" }
};

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const classes = useStyles();
  return (
    <>
      <AppBar
        component="header"
        position="static"
        className={classes.headerWithBackground}
        color="primary"
      >
        <Toolbar disableGutters={false} className={classes.toolbarStyle}>
          <Button variant="text" className={classes.brandLogo}>
            <Link to="/">
              <img src={beaproBranca} height="25" />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Paper
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Card className={classes.loginContainer}>
          <CardHeader color="primary" style={{ textAlign: "center" }}>
            <h4>Acessar Peneira</h4>
          </CardHeader>
          <CardBody>
            <Grid>
              <GridItem>
                <CustomInput
                  labelText="Seu e-mail"
                  id="username"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Sua senha"
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password"
                  }}
                />
              </GridItem>
            </Grid>
          </CardBody>
          <CardFooter>
            <Button
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                backgroundColor: "#4f68ad"
              }}
            >
              <Link to="/admin" style={{ color: "#fff" }}>
                Entrar
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </Paper>
    </>
  );
}
