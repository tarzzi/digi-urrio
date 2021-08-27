import * as React from "react"
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
  const biotext = "Joku kertoi minulle ennen opiskelujen alkua, että tuolta alalta revitään kaikki töihin koulusta. No ei oo revitty töihin. Joten koska opiskelija ei tunnu pääsevän töihin suoraan, niin teen oman työpaikkani. Ota yhteyttä niin laitetaan sinulle sivut kuntoon! "
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
              <StaticImage className='rounded-full mx-auto' src='https://urrio.fi/profile.jpg' alt='Tarmo Urrio'  />
              <div className='lg:col-span-2 md:col-span-2 sm:col-span-1' >
                <p className='font-semibold text-2xl mb-2'>Hei! Olen Tarmo, ohjelmistotekniikan opiskelija Jyväskylästä.</p>
                <p>{biotext}</p>
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
