import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Submit from './Submit';

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  //const [name, setName] = useState('');

  
  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <Submit addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
