import * as React from "react"
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import {Link} from 'gatsby';

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
          <div className='bg'>
          <Banner title='Kiitos viestistäsi!' idName='b3' />
            <div id='container' className='w-4/5 mx-auto text-center'>
              <h3 className='my-5'>Vastaan sinulle mahdollisimman pian 🙂</h3>
              <div className='my-10'>
                <Link className='button transition-all duration-200' to='/'>Takaisin etusivulle</Link>
              </div>
            </div>
          </div>
        </main>
      </Layout>
  )
}

export default IndexPage
