import './Menu.scss';
import React, { useState } from 'react'
import LinkItem from '../LinkItem/Linkitem'

export default function Menu() {
  const [data, setData] = useState({
    links: [
      {
      id: 1,
      to: '/',
      text: 'Главная',
      className: 'menu__item',
      },
    {
      id: 2,
      to: '/drift',
      text: 'Дрифт-такси',
      className: 'menu__item',
    },
    {
      id: 3,
      to: '/timeattack',
      text: 'Time Attack',
      className: 'menu__item',
    },
    {
      id: 4,
      to: '/forza',
      text: 'Forza Karting',
      className: 'menu__item',
    }],
    activeLink: 1
  });

  const setActive = id => {
    if (id === data.activeLink) return false;
    setData((prev) => ({
      ...prev, 
      activeLink: id 
    }));
  };

  return (
    <nav className="menu">
      {data.links.map(item => <LinkItem setActive={setActive} key={item.id} activeLink={data.activeLink} {...item} />)}
    </nav>
  )
}