import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from './context';
import NavLinks from './Navlinks';
const Navbar = () => {

    const {openSidebar, setPageId} = useGlobalContext();
    const handleSubmenu = (e) => {
        if(!e.target.classList.contains('nav-link')) {
            setPageId(null);
        }
    }
    return (
        <nav>
            <div className='nav-center'>
              <h3 className='logo'>strapi</h3>
              <button className='toggle-btn' onClick={openSidebar}>
                <FaBars />
              </button>
              {/* Navlinks later */}
              <NavLinks />
            </div>
        </nav>
    );
};

export default Navbar;