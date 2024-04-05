import { useState } from "react";
import reviews from "./data";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = reviews[index];
  
  const nextIndex = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1)%(reviews.length);
      return newIndex;
    })
  };
  const prevIndex = () => {
    setIndex((currentIndex) => {
      const newIndex = (((currentIndex - 1) + reviews.length)%(reviews.length));
      return newIndex;  
    })
  };

  const randomIndex = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex += 1;
    }
    setIndex(randomIndex%reviews.length);
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className='person-img' />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevIndex}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextIndex}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomIndex}>Surprise me</button>
      </article>
    </main>
  )
};
export default App;
