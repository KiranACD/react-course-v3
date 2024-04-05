import { useState } from "react";
import Questions from './Questions';
import data from './data';

const App = () => {

  const [questions, setQuestions] = useState(data);
  console.log(questions);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
