import React from "react"
import {Link} from 'gatsby';
import * as navStyles from './nav.module.scss'

export default function Nav() {
  return (
      <div className={`nav ${navStyles.nav}`}><Link to='/'>Digi-Urrio</Link>
          <Link to='/nettisivut'>Nettisivut</Link>
          <Link to='/digituki' >Digituki</Link>
          <Link to='/tietoa-minusta' >Tietoa minusta</Link>
          <Link to='/ota-yhteytta' >Ota yhteyttä</Link>
      </div>
  )
}