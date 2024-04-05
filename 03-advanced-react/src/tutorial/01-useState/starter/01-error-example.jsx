import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" onClick={handleClick} className='btn'>Increase Count</button>
    </div>
  );
};

export default ErrorExample;
