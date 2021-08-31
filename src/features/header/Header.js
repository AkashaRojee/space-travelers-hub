import React from 'react';
import { NavLink } from 'react-router-dom';
import logo  from './assets/image/planet.svg';
import './header.scss'

const linkList = [
  { id: 1, name: 'Rockets', to: '/'},
  { id: 2, name: 'Dragons', to: '/dragons'},
  { id: 3, name: 'Missions', to: '/missions'},
  { id: 4, name: 'My profile', to: '/profile'},
]

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Space Travelers' Hub Logo" />
      <h1>Space Travelers' Hub</h1>
      <nav>
        {linkList.map(({ id, name, to }) => (
          <NavLink key={id} activeClassName='active' exact={true} to={to}>{name}</NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;