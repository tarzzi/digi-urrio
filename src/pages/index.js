import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Helmet} from 'react-helmet';
import Card from '../components/Card'
import Nav from '../components/Nav'

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <Nav></Nav>
      <div id='banner' className='w-full block bg-black h-80 grid grid-cols-1 items-center justify-center'>
          <h1 className='text-center text-5xl text-white my-auto'>[PALVELUT BY TARMO]</h1>
      </div>
      {/*<div id='service' className='services'>*/}
            <div className='bg-blue-300 float-left w-1/2 text-center py-20'>
              <h2>Nettisivut</h2>
              <p>Edullisesti, opiskelijahinta - erinomainen laatu</p>
            </div>
            <div className='bg-red-300 float-right w-1/2 text-center py-20'>
              <h2>Digituki</h2>
              <p>Eikö printteri asennu? Tökkiikö netti?</p>
            </div>
      {/*</div>*/}
          <div id='contact'></div>
      </main>
  )
}

export default IndexPage
