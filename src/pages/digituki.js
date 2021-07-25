import * as React from "react"
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import ServiceCard from '../components/ServiceCard';

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
              <h2 className='text-center'>Paketit</h2>
              <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <ServiceCard>
                  <div><h3>Atk-tuki</h3> 30€/h</div>
                  <div  className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
                    <p>Tökkiikö netti? Eikö tulostin tulosta?</p>
                    <p>Apua pienempiin ja suurempiin tekniikan vastoinkäymisiin.</p></div>
                </ServiceCard>
                <ServiceCard>
                  <div><h3>Käyttöopastus</h3> 30€/h</div>
                  <div  className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
                    <p>Sinulle, joka tahdot laajemmat sivut, sisältäen esimerkiksi useamman sivun.<br /> <br />
                      Sisältää nopeasti toimivat nettisivut, toiveidesi mukaan, sekä hakukoneoptimoinnin.</p>
                  </div>
                </ServiceCard>
                <ServiceCard>
                  <div><h3>Jotain muuta?</h3></div>
                  <div className='lg:col-span-2 md:col-span-2 sm:col-span-1'><p>Sinulle, joka tahdot tahdot juuri tarpeillesi räätälöidyn paketin.<br /> <br />Ota yhteyttä, niin suunnitellaan yhdessä juuri teille sopiva ratkaisu.</p></div>
                </ServiceCard>
                <ServiceCard>
                  <div><h3>Palveluun sisältyy aina</h3></div>
                  <div className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
                    <ul className='listline'>
                      <li>Nopeasti latautuvat sivut</li>
                      <li>Kaikille päätelaitteille skaalautuvat sivut</li>
                      <li>Hakukoneoptimointi</li>
                      <li>Tyytyväisyystakuu</li>
                    </ul></div>
                </ServiceCard>
              </div>
              </div>
              <div id='contact'></div>
          </div>
        </main>
      </Layout>
  )
}

export default IndexPage
