import React from "react";
import Modal from "./components/Modal";
import QuizForm from "./components/QuizForm";
import { useGlobalContext } from "./context";
import Loader from "./components/Loader";

const App = () => {
  const { waiting, loading, questions, index, correct, checkAnswer } =
    useGlobalContext();

  if (waiting) {
    return <QuizForm />;
  }

  if (loading) {
    return <Loader />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  return (
    <main>
      <Modal />
      <section className="quiz">
        <div className="score-bar">
          <div className="correct-answer">
            Correct Answer <span>{correct}</span>
          </div>
          <div className="questions">
            Question <span>{index}</span>
          </div>
        </div>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div>
            {answers.map((answer, index) => {
              return (
                <>
                  <button
                    key={index}
                    className="answer-btn"
                    onClick={() => checkAnswer(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </>
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
};

export default App;
