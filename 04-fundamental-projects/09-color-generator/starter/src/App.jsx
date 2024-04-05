import Form from './Form';
import ColourList from './ColourList';
import Values from 'values.js';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const [colours, setColours] = useState(new Values('#f15025').all(10));
  // toast.error('error');
  // toast.success('success');

  const addColour = (colour) => {
    try {
      const newColours = new Values(colour).all(10);
      setColours(newColours);
      console.log(colour);
    } catch (error) {
      console.log('error')
      toast.error(error.message);
    }
  }

  
  return (
    <main>
      <Form addColour={addColour}/>
      <ColourList colours={colours}/>
      <ToastContainer position='top-center'/>
    </main>
  );
};
export default App;
