import React from 'react';
import { NavLink } from 'react-router-dom';
import logo  from './assets/image/planet.svg'

const linkList = [
  { id: 1, name: 'Rockets', to: '/'},
  { id: 2, name: 'Dragons', to: '/dragons'},
  { id: 3, name: 'Missions', to: '/missions'},
  { id: 4, name: 'My profil', to: '/profil'},
]

const Header = () => {
  return (
    <header>
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-bar">
          <ul className="nav-list">
            {
              linkList.map(({ id, name, to }) => (
            <li key={id} className="nav-link">
              <NavLink to={to}>{name}</NavLink>
            </li>
              ))
            }
          </ul>
        </nav>
    </header>
  );
};

export default Header;