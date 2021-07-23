import React from "react"
import {Link} from 'gatsby';

export default function Nav() {
  return (
      <div className='nav'>
        <ul>
          <li><Link to='/'>Digi-Urrio</Link></li>
          <li><Link to='/nettisivut'>Nettisivut</Link></li>
          <li><Link to='/digituki' >Digituki</Link></li>
          <li><Link to='/tietoa-minusta' >Tietoa minusta</Link></li>
          <li><Link to='/ota-yhteytta' >Ota yhteyttä</Link></li>
        </ul>
      </div>
  )
}