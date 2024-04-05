import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'Peter', age: 24, hobby: 'Reading books'})

  const setNewPerson = () => {
    setPerson({...person, name: 'susan'});
  }
  return (
    <>
      <h2>useState object example</h2>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>Enjoys {person.hobby}</h4>
      <button type='button' className='btn' onClick={setNewPerson}>Change Person</button>
    </>
  );
};

export default UseStateObject;
