/*eslint-disable*/
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Knowledge from "./Steps/Knowledge";
import Psychological from "./Steps/Psychological";
import Tournament from "./Steps/Tournament";
import TryOut from "./Steps/TryOut";
import Interview from "./Steps/Interview";

import CardFooter from "components/Card/CardFooter";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles(styles);

function getSteps() {
  return [
    "Teste de Conhecimento",
    "Teste Psicológico",
    "Campeonato",
    "Try Out",
    "Entrevista"
  ];
}

function getStepContent(step) {
  const [value, setValue] = useState("null");
  const handleChange = event => {
    setValue(event.target.value);
  };

  switch (step) {
    case 0:
      return <Knowledge />;
    case 1:
      return <Psychological />;
    case 2:
      return <Tournament />;
    case 3:
      return <TryOut />;
    case 4:
      return <Interview />;
    default:
      return "Passo desconhecido";
  }
}

export default function Filter() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  const isStepOptional = step => {
    return step === null;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Questionários para a peneira
            </h4>
            <p className={classes.cardCategoryWhite}>
              Desenvolvido e formulado pela <b>BEAPRO</b>.
            </p>
          </CardHeader>
          <CardBody>
            <Hidden only={["lg", "md"]}>
              <GridItem xs={12} sm={12} md={6}>
                <h5>
                  Isso é muito interessante para dizer em qual tamanho de
                  dispositivo vai apresentar
                </h5>
              </GridItem>
            </Hidden>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem md={12}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <Card className="px-3">
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  Todos os passos foram completados.
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Resetar
                </Button>
              </div>
            ) : (
              <div>
                {getStepContent(activeStep)}
                <CardFooter>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Voltar
                  </Button>
                  {isStepOptional(activeStep) && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSkip}
                      className={classes.button}
                    >
                      Pular
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
                  </Button>
                </CardFooter>
              </div>
            )}
          </Card>
        </div>
      </GridItem>
    </GridContainer>
  );
}
