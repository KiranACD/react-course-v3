import {memo} from 'react';
import Item from './Person';

const List = ({ people, removePerson }) => {
  console.log('render')
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};
export default memo(List);
