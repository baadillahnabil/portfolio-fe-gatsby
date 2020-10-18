/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'

const data = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'projects',
    url: '/projects',
  },
  {
    id: 4,
    text: 'blog',
    url: '/blog',
  },
  {
    id: 5,
    text: 'contact',
    url: '/contact',
  },
]

const tempLinks = data.map(link => (
  <li key={link.id}>
    <Link to={link.url}>{link.text}</Link>
  </li>
))

export default ({ styleClass }) => <ul className={`page-links ${styleClass || ''}`}>{tempLinks}</ul>
