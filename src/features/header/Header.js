import React from 'react';
import { NavLink } from 'react-router-dom';
import logo  from './assets/image/planet.svg';
import './header.css'

const linkList = [
  { id: 1, name: 'Rockets', to: '/'},
  { id: 2, name: 'Dragons', to: '/dragons'},
  { id: 3, name: 'Missions', to: '/missions'},
  { id: 4, name: 'My profile', to: '/profile'},
]

const Header = () => {
  return (
    <header className='header'>
      <div className='container flex  space-between cross-center gap-2 '>
        <img src={logo} alt="logo" className='logo' />
        <nav className="nav-bar container ">
          <ul className="nav-list flex  cross-center gap-3">
            {
              linkList.map(({ id, name, to }) => (
            <li key={id} className="nav-link">
              <NavLink activeClassName='active' exact={true} to={to}>{name}</NavLink>
            </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;