import './LinkItem.scss';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function LinkItem(props) {
  const { to, text, className } = props;
  return (
    <NavLink className={className} activeClassName={'menu__item-active'} exact to={to}>{ text }</NavLink>
  )
}

LinkItem.propTypes = {
  id: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

