import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { Container, Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import beaproBranca from "assets/img/beapro_logo_branca_total.png";
import Quiz from "components/Quiz";
import quizQuestions from "api/quizQuestions";
import update from "immutability-helper";
import "./style.css";

// import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2)
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-around"
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function KnowledgeTest({ open, handleClose }) {
  const classes = useStyles();
  const [test, setTest] = useState({
    counter: 0,
    questionId: 1,
    question: "",
    answerOptions: [],
    answer: "",
    answersCount: {},
    result: ""
  });

  function shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  useEffect(() => {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      shuffleArray(question.answers)
    );
    let tempTest = test;
    tempTest.question = quizQuestions[0].question;
    tempTest.answerOptions = shuffledAnswerOptions[0];
    setTest(tempTest);
  }, [test]);

  function setNextQuestion() {
    let tempTest = test;
    tempTest.counter = test.counter + 1;
    tempTest.questionId = test.questionId + 1;
    tempTest.question = quizQuestions[tempTest.counter].question;
    tempTest.answerOptions = quizQuestions[tempTest.counter].answers;
    tempTest.answer = "";
    setTest(tempTest);
  }
  function handleAnswerSelected(event) {
    handleClose(false);
    setUserAnswer(event.currentTarget.value);
    if (test.questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300);
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  }

  function setUserAnswer(answer) {
    let tempTest = test;
    tempTest.answersCount = {
      ...test.answersCount,
      [answer]: (test.answersCount[answer] || 0) + 1
    };
    tempTest.answer = answer;
    setTest(tempTest);
    console.log(test);
  }

  function getResults() {
    const answersCount = test.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }
  function setResults(result) {
    let tempTest = test;
    tempTest.result = result.length === 1 ? result[0] : "Undetermined";
    setTest(tempTest);
  }

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <img src={beaproBranca} height="30" />
          <Typography className={classes.title}>
            Teste de Conhecimento
          </Typography>
          <div>
            <Typography className={classes.title}>59:36</Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Container>
        <Quiz
          answer={test.answer}
          answerOptions={test.answerOptions}
          questionId={test.questionId}
          question={test.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={handleAnswerSelected}
        />
      </Container>
    </Dialog>
  );
}
