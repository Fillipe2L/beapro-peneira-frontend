import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

function Result(props) {
  return (
    <CSSTransition timeout={800}>
      <div>
        You prefer <strong>{props.quizResult}</strong>!
      </div>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
