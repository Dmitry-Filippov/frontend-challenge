import './Header.css'

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__links">
        <li>
          <NavLink to="/" className="header__navlink">Все котики</NavLink>
        </li>
        <li>
          <NavLink to="/liked" className="header__navlink">Любимые котики</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
