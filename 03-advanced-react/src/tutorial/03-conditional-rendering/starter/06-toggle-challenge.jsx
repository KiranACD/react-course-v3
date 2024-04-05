import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  // const toggleAlert = () => {

  // }
  return (
    <>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>Toggle Alert</button>
      {showAlert && <Alert />}
    </>
  );
};

const Alert = () => {
  return <div className='alert alert-danger'>Hello World</div>
}

export default ToggleChallenge;
