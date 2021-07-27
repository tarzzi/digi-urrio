import React from "react"
import {Link} from 'gatsby';
import * as navStyles from './nav.module.scss'
import BurgerNav from './BurgerNav';

export default function Nav() {
  return (<>
        <div className={`${navStyles.navBurger}`}>
          <div>Digi-Urrio</div>
          <BurgerNav />
        </div>
        <div className={`nav ${navStyles.nav}`}>
          <Link className='transition-all duration-200' to='/'>Digi-Urrio</Link>
          <Link className='transition-all duration-200' to='/nettisivut'>Nettisivut</Link>
          <Link className='transition-all duration-200' to='/digituki' >Digituki</Link>
          <Link className='transition-all duration-200' to='/tietoa-minusta' >Tietoa minusta</Link>
          <Link className='transition-all duration-200' to='/ota-yhteytta' >Ota yhteyttä</Link>
        </div>
  </>
  )
}