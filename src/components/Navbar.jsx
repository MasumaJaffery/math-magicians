/* eslint-disable linebreak-style */

import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => (
  <>
    <nav>
      <div className="logo">
        <h3>Math-Magicians</h3>
      </div>
      <ul className="links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/Quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
