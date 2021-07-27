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
        <div className='bg'>
        <Banner title='Ota yhteyttä' />
          <div id='container' className='my-4 w-4/5 mx-auto'>
            <div className='grid grid-cols-1 justify-center items-center text-center gap-8'>
              <p>Puhelin: 050-1234567</p>
              <p>Sähköposti: digi@urrio.fi</p>
              <h4>Voit myös laittaa kyselyn oheisen lomakkeen kautta</h4>
            </div>
            <form className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-2 my-5 mx-auto w-1/2 lomake' acceptCharset="UTF-8" action="https://formsubmit.co/234a581c88e120675a986e900a8ef1b2" method="POST">

              <p>Nimi</p>
                <input className='sm:col-span-1 md:col-span-1 lg:col-span-2' type="text" name="name" placeholder="" />

              <p>Puhelinnumero</p>
                <input className='sm:col-span-1 md:col-span-1 lg:col-span-2'  type="tel" name="phone" placeholder=""/>

              <p>Sähköpostiosoite</p>
                <input className='sm:col-span-1 md:col-span-1 lg:col-span-2' type="email" name="email" placeholder="" />

              <p>Viestisi</p>
              <textarea className='sm:col-span-1 md:col-span-1 lg:col-span-2' maxLength='350' rows="4" cols="50" name="message" placeholder="Viestisi" />

              <input type="hidden" name="_next" value="https://digi-urrio.vercel.app/kiitos-viestista" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_subject" value="Yhteydenottopyyntö" />
              <div className='lg:inline sm:hidden'></div>
              <button type="submit">Lähetä</button>
            </form>
          </div>
        </div>
      </main>
      </Layout>
  )
}

export default IndexPage
