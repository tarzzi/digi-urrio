import * as React from "react"
import {Link} from 'gatsby';
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
      <Banner title='DIGI-URRIO' />
      {/*<div id='service' className='services'>*/}
      <Link to='/nettisivut' className='link transition-all'>
            <div id='nettisivut' className='w-1/2 text-center py-20'>
                <h2>Nettisivut</h2>
            </div>
      </Link>
      <Link to='/digituki' className='link'>
            <div id='digituki' className='w-1/2 text-center py-20'>
              <h2>Digituki</h2>
            </div>
      </Link>
      <div className='clear-both'></div>
      </main>
      </Layout>
  )
}

export default IndexPage
