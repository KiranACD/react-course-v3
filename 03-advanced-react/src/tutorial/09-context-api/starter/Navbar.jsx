import { createContext } from 'react';
import { useState, useContext } from 'react';
import Navlinks from './Navlinks';

export const NavBarContext = createContext();

export const useAppContext = () => useContext(NavBarContext);

const Navbar = () => {
    const [user, setUser] = useState({name: 'Bob'});
    const logout = () => {
        setUser(null);
    }
    return (
        <NavBarContext.Provider value={{user, logout}}>
        <nav className='navbar'>
            <h5>Context Api</h5>
            <Navlinks user={user} logout={logout}/>
        </nav>
        </NavBarContext.Provider>
    )
}

export default Navbar;