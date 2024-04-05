import { useState } from "react";
import { nanoid } from 'nanoid';
import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    setText(data.slice(0, amount));
  }
  return (
    <section className="section-center">
      <h4>tired of boring Loren Ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" id='amount' name='amount' min='1' step='1' max='8' value={count} onChange={(e)=>setCount(parseInt(e.target.value))}/>
        <button className="btn" type='submit'>Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          const id = nanoid();
          return <p key={id}>{item}</p>  
        })}
      </article>
    </section>
  );
};
export default App;
