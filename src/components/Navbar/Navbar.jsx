import MainIcon from '../Navbar/MainIcon';
import SearchAndNotificatons from '../Navbar/SearchAndNotificatons';
import Menu from '../Navbar/Menu';
import Cart from '../Navbar/Cart';
import Profile from '../Navbar/Profile';
import useAuthContext from '../Hooks/useAuthContext';
import { Link } from 'react-router';

const Navbar = () => {
  const {user, logOutUser} = useAuthContext();
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-6">
        <div className="navbar-start">
          <MainIcon />
        </div>
        <div className="navbar-center flex justify-between gap-8">
          <SearchAndNotificatons />
          <Menu />
        </div>
        <div className="navbar-end gap-7">
        {user ? (
          <div>
            <div className="dropdown dropdown-end">
            <Cart />
          </div>
          <div className="dropdown dropdown-end">
            <Profile logOutUser={logOutUser}/>
          </div>
          </div>
        ) : (
          <div className='flex gap-3'>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          <Link to="/register" className="btn btn-secondary">Register</Link>
          </div>
        )
}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
