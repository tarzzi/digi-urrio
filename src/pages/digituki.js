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
