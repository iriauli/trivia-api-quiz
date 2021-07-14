import React from "react";
import { useGlobalContext } from "../context";

const QuizForm = () => {
  const { quiz, handleChange, handleSubmit } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form>
        <div className="app-name">
          <h1>Trivia API Quiz</h1>
        </div>
        <div>
          <label for="noOfQuestion">Number of Questions</label>
          <input
            type="number"
            name="amount"
            value={quiz.amount}
            onChange={handleChange}
            min={1}
            max={50}
          />
        </div>
        <div>
          <label for="category">Category</label>
          <select
            name="category"
            id="category"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
          </select>
        </div>
        <div>
          <label for="difficulty">Difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button type="submit" onClick={handleSubmit} className="answer-btn">
          Start
        </button>
      </form>
    </section>
  );
};

export default QuizForm;
