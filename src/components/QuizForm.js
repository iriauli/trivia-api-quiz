import React from "react";
import { useGlobalContext } from "../context";

const QuizForm = () => {
  const { quiz, handleChange, handleSubmit } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form>
        <div>
          <h1 class="text-blue-600 text-4xl font-semibold pb-5">Trivia API Quiz</h1>
        </div>
        <div>
          <label for="noOfQuestion" class="text-lg">
            Number of Questions
          </label>
          <input
            class="apperance-none w-full border border-gray-300 rounded-lg"
            type="number"
            name="amount"
            value={quiz.amount}
            onChange={handleChange}
            min={1}
            max={50}
          />
        </div>
        <div class="mt-1">
          <label for="category" class="text-lg">
            Category
          </label>
          <select
            class="apperance-none w-full border border-gray-300 rounded-lg mb-3"
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
          <label for="difficulty" class="text-lg">
            Difficulty
          </label>
          <select
            class="apperance-none w-full border border-gray-300 rounded-lg"
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
        <div class="flex justify-center">
        <button type="submit" onClick={handleSubmit}
        class="btn border border-gray-200 w-full px-12 py-2 rounded-lg border border-gray-300 text-md text-gray-600 mt-7 bg-gradient-to-tl from-gray-200 to-gray-100 hover:from-gray-300 hover:to-gray-200 shadow-sm">
          Start
        </button>
        </div>
      </form>
    </section>
  );
};

export default QuizForm;
