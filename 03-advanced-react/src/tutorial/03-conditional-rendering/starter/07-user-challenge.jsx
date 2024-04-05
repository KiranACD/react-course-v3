import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({name: 'vegan food truck'});
  };

  const logout = () => {
    setUser(null);
  };


  return (
    <>
      <h4>{user ? `Hello there, ${user.name}`:`Please login`}</h4>
      <button type="button" className="btn" onClick={user ? logout:login}>
        {user ? 'Logout':'Login'}
      </button>
    </>
  );
};

export default UserChallenge;
