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
        <div className="score-bar pb-3">
          <div className="correct-answer">
            Correct Answer <span>{correct}</span>
          </div>
          <div className="questions">
            Question <span>{index}</span>
          </div>
        </div>
        <article className="container">
          <h2 class="text-2xl text-blue-500 font-semibold pl-12" dangerouslySetInnerHTML={{ __html: question }} />
          <div>
            {answers.map((answer, index) => {
              return (
                <>
                <div class="flex justify-center">
                  <button
                    key={index}
                    className="btn border border-gray-200 w-9/12 px-12 py-2 rounded-lg border border-gray-300 text-md text-gray-600 mt-7 bg-gradient-to-tl from-gray-200 to-gray-100 hover:from-gray-300 hover:to-gray-200 shadow-sm"
                    onClick={() => checkAnswer(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                  </div>
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
