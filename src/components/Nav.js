import React from "react"
import {Link} from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Nav() {
  return (
      <div className='nav'>
        <ul>
          <li><Link to='/'>Digi-Urrio</Link></li>
          <li><Link to='/nettisivut'>Nettisivut</Link></li>
          <li><Link to='/digituki' >Digituki</Link></li>
          <li><Link to='/digituki' >Tietoa minusta</Link></li>
          <li><Link to='/digituki' >Ota yhteyttä</Link></li>
        </ul>
      </div>
  )
}