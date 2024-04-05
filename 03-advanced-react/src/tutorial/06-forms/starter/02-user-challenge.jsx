import { useState } from "react";
import {data} from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newObj = {id:fakeId, name:name};
    const newUsers = [...users, newObj];
    setUsers(newUsers);
    setName('');
    console.log(users);
  }

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (

    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map((user) => {
        return <div key={user.id}>
          <h4>{user.name}</h4>
          <button type='button' class='btn' onClick={()=>removeUser(user.id)}>Remove</button>
        </div>
      })}
    </div>
  );
};
export default UserChallenge;
