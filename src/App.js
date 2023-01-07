import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("");
  const [total, setTotal] = useState(0);

  if (count > 3) {
    return (
      <>
        <h1>
          {total}/{questions.length}
        </h1>
      </>
    );
  } else {
    const { question, a, b, c, d, correct } = questions[count];
    function deselectAnswers() {
      const inputs = document.querySelectorAll(".answer");
      inputs.forEach((ans) => (ans.checked = false));
    }
    const submitHandler = () => {
      console.log(answer);
      {
        answer == correct && setTotal(total + 1);
      }
      deselectAnswers();
      setCount(count + 1);
    };
    const changeHandler = (e) => {
      setAnswer(e.target.value);
    };
    return (
      <div className="container">
        <h2>{question}</h2>
        <ul onChange={(e) => changeHandler(e)}>
          <li>
            <input
              type="radio"
              name="answer"
              id="a"
              className="answer"
              value="a"
            />
            <label htmlFor="a">{a}</label>
          </li>

          <li>
            <input
              type="radio"
              name="answer"
              id="b"
              className="answer"
              value="b"
            />
            <label htmlFor="b" id="b_text">
              {b}
            </label>
          </li>

          <li>
            <input
              type="radio"
              name="answer"
              id="c"
              className="answer"
              value="c"
            />
            <label htmlFor="c" id="c_text">
              {c}
            </label>
          </li>

          <li>
            <input
              type="radio"
              name="answer"
              id="d"
              className="answer"
              value="d"
            />
            <label htmlFor="d" id="d_text">
              {d}
            </label>
          </li>
        </ul>
        <button onClick={() => submitHandler()}>Submit</button>
      </div>
    );
  }
};

export default App;

// function deselectAnswers() {
//   answerEls.forEach((answerEl) => (answerEl.checked = false));
// }

// function getSelected() {
//   let answer;

//   answerEls.forEach((answerEl) => {
//     if (answerEl.checked) {
//       answer = answerEl.id;
//     }
//   });

//   return answer;
// }
