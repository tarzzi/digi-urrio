import * as React from "react"
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout'
import Banner from '../components/Banner'

const IndexPage = () => {
  return (
      <Layout>
      <main>
        <Helmet>
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Helmet>
        <Banner title='Digituki' />
        <div id='bg'>
          <div id='container' className='w-4/5 mx-auto'>

            <div id='service' className='services'>
              <p>Käynnit alkaen 30€/h</p>
              <p>Tökkiikö netti? Eikö tulostin tulosta? Kaipaako vanhempi tukea tekniikan käytössä?</p>
              <p>Huomioi myös kotitalousvähennys!</p>
            </div>
            <div id='contact'></div>
          </div>
        </div>
      </main>
      </Layout>
  )
}

export default IndexPage
