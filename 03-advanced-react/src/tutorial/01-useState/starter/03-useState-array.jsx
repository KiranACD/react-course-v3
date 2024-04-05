import { useState } from 'react';
import {data} from '../../../data';

const UseStateArray = () => {
  
  const [dataArr, setDataArr] = useState(data);

  const removeItem = (id) => {
    const newArr = dataArr.filter((arrItem) => {
      return arrItem.id !== id;
    });
    setDataArr(newArr);
  };

  const clearItems = () => {
    let newArr = [];
    setDataArr(newArr);
  }
  return (
    <>
      <h2>useState array example</h2>
      {dataArr.map((data) => {
        
        return (
         <div key={data.id}>
           <h4>{data.name}</h4>
           <button type='button' onClick={() => removeItem(data.id)}>Remove Item</button>
         </div>
        );
      })}
      <button type='button' onClick={clearItems}>Clear Items</button>
  </>
  );
};

export default UseStateArray;
