import { useState } from "react";
import Questions from './Questions';
import data from './data';

const App = () => {

  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  
  const toggleQuestion = (id) => {
    if (activeId === id) {
      setActiveId(null);
      return
    }
    setActiveId(id);
  }
  return (
    <main>
      <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion}/>
    </main>
  );
};
export default App;
