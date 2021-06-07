import './LinkItem.scss';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function LinkItem(props) {
  console.log(props);
  const { id, to, text, className, activeLink, setActive } = props;
  console.log(className + (id === activeLink ? " menu__item-active" : ""));
  return (
    <Link onClick={() => setActive(id)} className={className + (id === activeLink ? " menu__item-active" : "") } to={to}>{ text }</Link>
  )
}

LinkItem.propTypes = {
  id: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  activeLink: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired
}

