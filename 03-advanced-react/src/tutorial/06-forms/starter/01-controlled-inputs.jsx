import { useState } from "react";

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // const handleChange = (e) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(`email: ${email}`)
  };
  // htmlfor and id should be the same. htmlfor puts the input in focus.
  return (
    <form className='form' action="" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor="name" className='form-label'>name</label>
        <input type="text" id='name' className='form-input' value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">email</label>
        <input type="email" id='email' className="form-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <button type='submit' className="btn btn-block">submit</button>
    </form>
  );
};
export default ControlledInputs;
