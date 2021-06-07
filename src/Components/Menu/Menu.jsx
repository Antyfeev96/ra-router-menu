import './Menu.scss';
import React, { useState } from 'react'
import LinkItem from '../LinkItem/Linkitem'

export default function Menu() {
  const [data, setData] = useState({
    links: [
      {
      id: 1,
      to: '/ra-router-menu/',
      text: 'Главная',
      className: 'menu__item',
      },
    {
      id: 2,
      to: '/ra-router-menu/drift',
      text: 'Дрифт-такси',
      className: 'menu__item',
    },
    {
      id: 3,
      to: '/ra-router-menu/timeattack',
      text: 'Time Attack',
      className: 'menu__item',
    },
    {
      id: 4,
      to: '/ra-router-menu/forza',
      text: 'Forza Karting',
      className: 'menu__item',
    }]
  });

  return (
    <nav className="menu">
      {data.links.map(item => <LinkItem key={item.id} {...item} />)}
    </nav>
  )
}