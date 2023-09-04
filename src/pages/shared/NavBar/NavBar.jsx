import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">Contact Us</Link></li>
    <li><Link to="/">Dashboard</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order">Our Shop</Link></li>
    <li><Link to="/secret">Secret</Link></li>
    <li>
            <Link to="/">
                <button className="btn glass gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary ">+0</div>
                </button>
            </Link>
        </li>
    {/* {
      user ? <span>{user?.displayName}</span> : <li><Link to="/login">Login</Link></li>
    } */}

{
            user ?
              <button onClick={handleLogOut} className="btn btn-secondary uppercase btn-ghost">Sign Out</button>
              : <Link to="/login" className="btn uppercase btn-ghost">Login</Link>
          }
  </>

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-10 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase ">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">
            {navOptions}
          </ul>
        </div>
        {/* <div className="navbar-end">
          {
            user ?
              <button onClick={handleLogOut} className="btn btn-secondary uppercase">Sign Out</button>
              : <Link to="/login" className="btn uppercase">Login</Link>
          }
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
