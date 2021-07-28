import React from "react"
import {Link} from 'gatsby';
import * as navStyles from './nav.module.scss'
import BurgerNav from './BurgerNav';

export default function Nav() {
  return (<>
        <div id='navi' className={`${navStyles.navBurger}`}>
          <div>Digi-Urrio</div>
          <BurgerNav />
        </div>
        <div id='navi'  className={`nav ${navStyles.nav}`}>
          <Link activeClassName="active" className='transition-all duration-200' to='/'>Digi-Urrio</Link>
          <Link activeClassName="active" className='transition-all duration-200' to='/nettisivut'>Nettisivut</Link>
          <Link activeClassName="active" className='transition-all duration-200' to='/digituki' >Digituki</Link>
          <Link activeClassName="active" className='transition-all duration-200' to='/tietoa-minusta' >Tietoa minusta</Link>
          <Link activeClassName="active" className='transition-all duration-200' to='/ota-yhteytta' >Ota yhteyttä</Link>
        </div>
  </>
  )
}