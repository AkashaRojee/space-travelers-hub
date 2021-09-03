import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.svg';

const linkList = [
  { id: 1, name: 'Rockets', to: '/' },
  { id: 2, name: 'Dragons', to: '/dragons' },
  { id: 3, name: 'Missions', to: '/missions' },
  { id: 4, name: 'My profile', to: '/profile' },
];

const Header = () => (
  <header>
    <img src={logo} alt="Space Travelers' Hub Logo" />
    <h1>Space Travelers&apos; Hub</h1>
    <nav>
      {linkList.map(({ id, name, to }) => (
        <NavLink key={id} activeClassName="active" exact to={to}>{name}</NavLink>
      ))}
    </nav>
  </header>
);

export default Header;
