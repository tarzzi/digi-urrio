import * as React from "react"
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import ServiceCard from '../components/ServiceCard';

const IndexPage = () => {
  return (
      <Layout>
        <main className='bg'>
          <Helmet>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
            <meta name="title" content="Digi-Urrio - nettisivut ympäri suomen, tekninen tukesi jyväskylässä"/>
            <meta name="description" content="Digi-Urriolta nettisivut ja tekninen tuki, hyvään hintaan, tyytyväisyystakuulla."/>
            <meta name="keywords" content="nettisivut, nettisivu, websivut, web-sivut, kotisivu, kotisivut, tekninen tuki, digiapu, tekniikka-apu, nettisivut yritykselle, halvat nettisivut, nettisivut jyväskylä, websivut jyväskylä, verkkosivut jyväskylä, kotisivut jyväskylä, halpa, opiskelija, hyvät, hyvä, laatu"/>
            <meta name="robots" content="index, follow"/>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="Finnish"/>
            <meta name="revisit-after" content="7 days"/>
            <meta name="author" content="Tarmo Urrio" />
          </Helmet>
          <Banner title='Digituki' subtitle='Apuna digiviidakossa' idName='b3' />
            <div id='container' className='mt-8 w-4/5 mx-auto'>
              <h2 className='text-center mb-5'>Palvelut Jyväskylän alueella</h2>
              <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <ServiceCard title='Atk-tuki' price='30€/h'>
                  <div  className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
                    <p>Tökkiikö netti? Eikö tulostin tulosta?</p>
                    <p>Apua pienempiin ja suurempiin tekniikan vastoinkäymisiin.</p></div>
                </ServiceCard>
                <ServiceCard title='Laitteen käytön opetus' price='30€/h'>
                  <div  className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
                    <p>Tarvitsetko apua laitteen käytössä? Mietitkö miten uutta älypuhelintasi käytetään?</p></div>
                </ServiceCard>
              </div>
              <div className='mt-8 mb-20'>
                <h3>Digitukea Jyväskylän alueella</h3>
                <p>Etkö ole varma mitä tarvitsisit? Ota yhteyttä niin löydetään ratkaisu pulmaasi. Hinnat sisältävät alv. 24%. Muista myös hyödyntää kotitalousvähennys! Vähennys koskee tietokoneen asennus- ja opastustyötä, tietokoneohjelmien asennusta ja päivitystä, sekä ohjelmien ja tiedostojen virustarkistusta.</p>
              </div>
            </div>
        </main>
      </Layout>
  )
}

export default IndexPage
