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
              <h4>Voit myös laittaa kyselyn oheisen lomakkeen kautta</h4>
            </div>
            <form className='grid grid-cols-3 gap-2 my-5 mx-auto w-1/2 lomake' acceptCharset="UTF-8" action="https://formsubmit.co/234a581c88e120675a986e900a8ef1b2" method="POST">

              <label>Nimi</label>
                <input className='col-span-2' type="text" name="name" placeholder="" />

              <label htmlFor='email'>Puhelinnumero</label>
                <input className='col-span-2'  type="tel" name="phone" placeholder=""/>

              <label>Sähköpostiosoite</label>
                <input className='col-span-2' type="email" name="email" placeholder="" />

              <label >Viestisi</label>
              <textarea className='col-span-2' maxLength='350' rows="4" cols="50" name="message" placeholder="Viestisi" />

              <input type="hidden" name="_next" value="https://digi-urrio.vercel.app/kiitos-viestista" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_subject" value="Yhteydenottopyyntö" />
              <div></div>
              <button type="submit">Lähetä</button>
            </form>
          </div>
        </div>
      </main>
      </Layout>
  )
}

export default IndexPage
