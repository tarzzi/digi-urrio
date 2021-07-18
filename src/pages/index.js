import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Helmet} from 'react-helmet';
import Card from '../components/Card'

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <div id='banner' className='w-full block bg-black h-80 grid grid-cols-1 items-center justify-center'>
          <h1 className='text-center text-5xl text-white my-auto'>[KOTISIVUT BY TARMO]</h1>
      </div>
      <div id='bg'>
        <div id='container' className='w-4/5 mx-auto'>
            <div id='intro' className='text-center py-5 my-5 text-3xl'>
              Lorem ipsum dolor sit amet asd, maximus nec ut nisl. Lorem ipsum dolor sit amet asd, maximus nec ut nisl. Lorem ipsum dolor sit amet asd, maximus nec ut nisl.
          </div>

          <div id='service' className='services'>
            <Card>
              <StaticImage src='https://placekitten.com/300/300' alt='kitten'></StaticImage>
              <div className='pl-5'>
                <h1>Title</h1>
                <ul>
                  <li>Information</li>
                  <li>Information</li>
                  <li>Information</li>
                  <li>Offer</li>
                </ul>
              </div>
            </Card>
            <Card>
              <StaticImage src='https://placekitten.com/300/300' alt='kitten'></StaticImage>
              <div className='pl-5'>
                <h1>Title</h1>
                <ul>
                  <li>Information</li>
                  <li>Information</li>
                  <li>Information</li>
                  <li>Offer</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
      </main>
  )
}

export default IndexPage
