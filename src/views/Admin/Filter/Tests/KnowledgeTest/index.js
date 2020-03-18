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
import Result from "components/Quiz/Result";
import quizQuestions from "api/quizQuestions";

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

  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState("");
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answersCount, setAnswersCount] = useState({});
  const [result, setResult] = useState("");

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
    setQuestion(quizQuestions[0].question);
    setAnswerOptions(shuffledAnswerOptions[0]);
  }, []);

  function setNextQuestion() {
    setCounter(counter + 1);
    setQuestionId(questionId + 1);
    setQuestion(quizQuestions[counter].question);
    setAnswerOptions(quizQuestions[counter].answers);
    setAnswer("");
  }
  function handleAnswerSelected(event) {
    setUserAnswer(event.currentTarget.value);
    if (questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300);
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  }

  function setUserAnswer(currentAnswer) {
    setAnswersCount({
      ...answersCount,
      [answer]: (answersCount[currentAnswer] || 0) + 1
    });
    setAnswer(currentAnswer);
  }

  function getResults() {
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  function setResults(result) {
    setResult(result.length === 1 ? result[0] : "Undetermined");
  }

  function renderQuiz() {
    return (
      <Quiz
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={handleAnswerSelected}
      />
    );
  }

  function renderResult() {
    return <Result quizResult={this.state.result} />;
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
      <Container>{result ? renderResult() : renderQuiz()}</Container>
    </Dialog>
  );
}
