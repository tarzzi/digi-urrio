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
        <Banner title='Tietoa minusta' />
        <div id='bg'>
          <div id='container' className='w-4/5 mx-auto'>
            <div className='grid grid-cols-3 gap-5'>
              <StaticImage className='' src='https://placekitten.com/800/600' alt='cat' ></StaticImage>
              <div className='col-span-2' >
                <p className='font-semibold text-2xl'>Hei! Olen Tarmo, ohjelmistotekniikan opiskelija Jyväskylästä.</p>
                <p>Omien projektien puutteen vuoksi päätin lähteä toteuttamaan teidän sivuja!</p>

              </div>
            </div>
          </div>
        </div>
      </main>
      </Layout>
  )
}

export default IndexPage
