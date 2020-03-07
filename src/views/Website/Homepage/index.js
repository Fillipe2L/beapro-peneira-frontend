/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Avatar, Icon, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Timeline } from "react-material-timeline";
import Background from "../../../assets/img/background-website.jpg";

import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {
  MdGamepad,
  MdFlag,
  MdTrendingUp,
  MdSchool,
  MdMood
} from "react-icons/md";

import beaproBranca from "assets/img/beapro_logo_branca_total.png";
import beaproAzul from "assets/img/beapro_logo_azul_escuro.png";
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
  },
  timeline: {},
  rodape: {
    padding: "80px 0",
    zIndex: 3,
    position: "relative",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "50%"
  },
  lastFooter: {
    color: "#4F68AD",
    textDecoration: "none",
    background: "#fff",
    display: "flex",
    padding: "1rem 0",
    zIndex: 2,
    position: "relative",
    textAlign: "center"
  }
};

const useStyles = makeStyles(styles);

export default function Homepage(props) {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState(false);

  const events = [
    {
      title: "Etapa I",
      subheader: "Teste de conhecimento",
      description: [
        "É necessário que o participante da peneira tenha conhecimento o suficiente para ser um jogador capacitado para o cenário competitivo de esports."
      ],
      icon: (
        <Avatar>
          <MdSchool />
        </Avatar>
      )
    },
    {
      title: "Etapa II",
      subheader: "Teste de Psicologico",
      description: [
        `Essa etapa serve para avaliar o mindset e a condição psicológica do jogador que é algo muito importante para quem quer ingressar no cenário competitivo de esports.`
      ],
      icon: (
        <Avatar>
          <MdMood />
        </Avatar>
      )
    },
    {
      title: "Etapa III",
      subheader: "Campeonato",
      description: [
        `Será criado um campeonato com formato de eliminatórias e os times serão formados de acordo com o resultado da Etapa 1 e 2. 
        `
      ],
      icon: (
        <Avatar>
          <Icon>emoji_events</Icon>
        </Avatar>
      )
    },
    {
      title: "Etapa IV",
      subheader: "Try out",
      description: [
        `No “Try Out” será avaliado a comunicação, trabalho em equipe, planejamento, liderança e o comportamento do jogador em jogo.
        `
      ],
      icon: (
        <Avatar>
          <Icon>sports</Icon>
        </Avatar>
      )
    },
    {
      title: "Etapa V",
      subheader: "Entrevista",
      description: [
        `Nesta etapa a entrevista será criada/feita pelo time profissional de esports para avaliar individualmente o perfil de cada jogador e qual mais se encaixa de acordo com os valores e necessidades da organização.
        `
      ],
      icon: (
        <Avatar>
          <Icon>assignment_ind</Icon>
        </Avatar>
      )
    },
    {
      title: "Etapa Final",
      subheader: "Teste de conhecimento",
      description: ["Integre nosso ranking e entre em um grande Time"],
      icon: (
        <Avatar>
          <Icon>star</Icon>
        </Avatar>
      )
    }
  ];

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  function listenScrollEvent(e) {
    if (window.scrollY > 145) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  }

  return (
    <>
      <AppBar
        component="header"
        position="fixed"
        className={
          navBackground ? classes.headerWithBackground : classes.header
        }
        color="primary"
      >
        <Toolbar disableGutters={false} className={classes.toolbarStyle}>
          <Button variant="text" className={classes.brandLogo}>
            <Link to="/">
              <img src={beaproBranca} height="25" />
            </Link>
          </Button>

          <div>
            <Button color="inherit" className={classes.brandLogo}>
              <Link to="/login">Login</Link>
            </Button>
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
            <div
              style={{
                textAlign: "center",
                padding: "30px 70px"
              }}
            >
              <Grid container className={classes.detailSection}>
                <Grid item className={classes.detailItem}>
                  <h3
                    style={{
                      marginBottom: "55px",
                      color: "#4F68AD",
                      fontSize: "2.25rem",
                      fontWeight: 700
                    }}
                  >
                    Os passos para se tornar um campeão
                  </h3>
                  <Timeline
                    color={"red"}
                    className={classes.timeline}
                    events={events}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rodape}>
        <div
          style={{
            textAlign: "center",
            padding: "30px 70px"
          }}
        >
          <Grid container className={classes.detailSection}>
            <Grid
              item
              className={classes.detailItem}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <h3
                style={{
                  marginBottom: "55px",
                  color: "#344A8A",
                  fontSize: "3.25rem",
                  fontWeight: "bold"
                }}
              >
                Nada mais te impede de se tornar um Pro
              </h3>
              <h4>Olheiros de grandes times estão te esperando na Be a Pro.</h4>
              <Paper
                style={{
                  width: "fit-content",
                  padding: "20px"
                }}
              >
                <Card>
                  <CardHeader color="primary">
                    <h4>Inscreva-se na peneira BEAPRO</h4>
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
                          labelText="Seu nickname no jogo"
                          id="email-address"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                    </Grid>
                  </CardBody>
                  <CardFooter>
                    <Button variant="contained" style={{ width: "100%" }}>
                      Inscrever-se
                    </Button>
                  </CardFooter>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <footer className={classes.lastFooter}>
        <div
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "15px",
            paddingRight: "15px"
          }}
        >
          <div style={{ float: "left !important", display: "block" }}>
            <img
              src={beaproAzul}
              style={{ height: "50px", padding: "15px 15px" }}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
