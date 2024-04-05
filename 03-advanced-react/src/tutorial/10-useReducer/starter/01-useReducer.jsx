import {useReducer} from 'react';
import { data } from '../../../data';
import {CLEAR_LIST, RESET_LIST, REMOVE_ITEM} from './actions';
import reducer from './reducer';

const defaultState = {
  people:data
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({type:REMOVE_ITEM, payload:{id}})
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const handleClick = (action) => {
    if (action==='reset') {
      // console.log(people);
      dispatch({type:RESET_LIST});
      return;
    }
    dispatch({type:CLEAR_LIST});
    // console.log('clear: ', people);

  }

  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length>0?(
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => handleClick('clear')}
      >
        clear items
      </button>
      ):(
        <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => handleClick('reset')}
      >Reset</button>
      )

      }
    </div>
  );
};

export default ReducerBasics;
