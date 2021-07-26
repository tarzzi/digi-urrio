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
              <p>Puhelin: 050-1234567</p>
              <p>Sähköposti: digi@urrio.fi</p>
            </div>
            <form className='my-5 mx-auto w-1/2 lomake' acceptCharset="UTF-8" action="https://formsubmit.co/tarmo@urrio.fi" method="POST">
              <h4>Voit myös laittaa kyselyn oheisen lomakkeen kautta</h4>
              <label for='name'>Nimi
                <input type="text" name="name" placeholder="Nimi" />
              </label>
              <input type="email" name="email" placeholder="Sähköpostiosoite" />
              <input type="text" name="message" placeholder="Viestisi" />
              <input type="hidden" name="_next" value="localhost:8000/kiitos-viestista" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_subject" value="Yhteydenottopyyntö" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </main>
      </Layout>
  )
}

export default IndexPage
