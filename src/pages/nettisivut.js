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
          <h1 className='text-center text-5xl text-white my-auto'>[NETTISIVUT BY TARMO]</h1>
        </div>
        <div id='bg'>
          <div id='container' className='w-4/5 mx-auto'>

            <div id='service' className='services'>
            </div>
            <div id='contact'></div>
          </div>
        </div>
      </main>
  )
}

export default IndexPage
