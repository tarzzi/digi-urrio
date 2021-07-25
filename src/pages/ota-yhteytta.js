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
        <Banner title='Ota yhteyttä' />
        <div id='bg'>
          <div id='container' className='w-4/5 mx-auto'>
            <div className='grid grid-cols-1 justify-center items-center text-center gap-8'>
              <p>Puhelin 050-1234567</p>
              <p>Sähköposti digi@urrio.fi</p>
              <p>Lomake tähän</p>
            </div>
            <form accept-charset="UTF-8" action="https://getform.io/f/{unique-endpoint-generated-on-step-1}" method="POST">
              <input type="email" name="email" placeholder="Your Email" />
                <input type="text" name="name" placeholder="Your Name" />
                  <input type="text" name="message" placeholder="Your Message" />
                    <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </main>
      </Layout>
  )
}

export default IndexPage
