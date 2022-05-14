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
          <meta name="title" content="Digi-Urrio - nettisivut ympäri suomen, tekninen tukesi jyväskylässä"/>
          <meta name="description" content="Digi-Urriolta nettisivut ja tekninen tuki, hyvään hintaan, tyytyväisyystakuulla."/>
          <meta name="keywords" content="nettisivut, nettisivu, websivut, web-sivut, kotisivu, kotisivut, tekninen tuki, digiapu, tekniikka-apu, nettisivut yritykselle, halvat nettisivut, nettisivut jyväskylä, websivut jyväskylä, verkkosivut jyväskylä, kotisivut jyväskylä, halpa, opiskelija, hyvät, hyvä, laatu"/>
          <meta name="robots" content="index, follow"/>
          <meta charset="UTF-8" />
          <meta name="language" content="Finnish"/>
          <meta name="revisit-after" content="7 days"/>
          <meta name="author" content="Tarmo Urrio" />
          <title>Digi-Urrio - Ota yhteyttä</title>
        </Helmet>
        <div className='bg'>
        <Banner title='Ota yhteyttä' subtitle='Kysyjälle vastataan' idName='b5' />
          <div id='container' className='mt-8 my-4 w-4/5 mx-auto'>
            <div className='grid grid-cols-1 justify-center items-center text-center gap-8'>
              <p>Sähköposti: &#100;&#105;&#103;&#105;&#64;&#117;&#114;&#114;&#105;&#111;&#46;&#102;&#105;</p>
              <h4><strong>Yritystoiminta keskeytettynä, nämä sivut toimivat esimerkkinä tuotetusta ratkaisusta, kiitos mielenkiinnostasi!</strong></h4>
            </div>
            <form className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-2 mt-5 mb-20 mx-auto w-1/2 lomake' acceptCharset="UTF-8">

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
              <button>Lähetä</button>
            </form>
          </div>
        </div>
      </main>
      </Layout>
  )
}

export default IndexPage
