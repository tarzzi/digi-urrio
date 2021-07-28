import * as React from "react"
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
      <Layout >
      <main>
        <Helmet>
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Helmet>
        <div className='bg'>
        <Banner title='Tietoa minusta' subtitle='Eli yrittäjä paketissa' idName='b4' />
        <div id='bg'>
          <div id='container' className='mt-8 w-4/5 mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center'>
              <StaticImage className='rounded-full mx-auto' src='https://urrio.fi/profile.jpg' alt='Tarmo Urrio' ></StaticImage>
              <div className='lg:col-span-2 md:col-span-2 sm:col-span-1' >
                <p className='font-semibold text-2xl mb-2'>Hei! Olen Tarmo, ohjelmistotekniikan opiskelija Jyväskylästä.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in luctus est, eu auctor lacus. Suspendisse pulvinar, sem at mollis pretium, ligula justo ultrices urna, ut vestibulum odio arcu vel tortor. Donec vehicula accumsan feugiat. Duis ornare sed nisi mattis hendrerit. Sed sagittis tellus ac purus porttitor euismod. Curabitur felis nibh, hendrerit quis placerat id, placerat in quam. Nullam malesuada mollis suscipit. Etiam interdum odio non tellus ullamcorper, non fringilla eros ornare. Sed fermentum fringilla est, vehicula pellentesque ligula lobortis eu.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
      </Layout>
  )
}

export default IndexPage
