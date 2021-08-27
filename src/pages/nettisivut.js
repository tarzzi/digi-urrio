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
          <meta charSet='utf-8' />
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <title>Nettisivut Digi-Urriolta</title>
        </Helmet>
        <Banner title='Nettisivut' subtitle='Nettisivut oman maun mukaan' idName='b2' />
          <div id='container' className='my-8  w-4/5 mx-auto'>
            <h2 className='text-center mb-5'>Paketit</h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
              <ServiceCard title='Simppeli' price='200€ + alv(24%)'>
                <div className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
                  <p>Sinulle, joka tahdot yksinkertaiset sivut saadaksesi itsesi tai yrityksesi nettiin.<br /> <br />
                    Sisältää nopeasti toimivan, yhden sivun nettisivun toiveidesi mukaan, sekä hakukoneoptimoinnin.</p>
                </div>
              </ServiceCard>
              <ServiceCard title='Laaja' price='300€ + alv(24%)'>
                <div  className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
                  <p>Sinulle, joka tahdot laajemmat sivut, sisältäen esimerkiksi useamman sivun.<br /> <br />
                    Sisältää nopeasti toimivat nettisivut, toiveidesi mukaan, sekä hakukoneoptimoinnin.</p>
                </div>
              </ServiceCard>
              <ServiceCard title='Jotain muuta?'>
                <div className='lg:col-span-2 md:col-span-2 sm:col-span-1'><p>Sinulle, joka tahdot tahdot juuri tarpeillesi räätälöidyn paketin.<br /> <br />Ota yhteyttä, niin suunnitellaan yhdessä juuri sinulle sopiva ratkaisu.</p></div>
              </ServiceCard>
              <ServiceCard title='Palveluun sisältyy aina'>
                <div className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
                  <ul className='listline'>
                    <li>Nopeasti latautuvat sivut</li>
                    <li>Kaikille päätelaitteille skaalautuvat sivut</li>
                    <li>Hakukoneoptimointi</li>
                    <li>Tyytyväisyystakuu</li>
                  </ul></div>
              </ServiceCard>
            </div>
            <div className='mt-8 mb-20'>
              <h3>Mitä nettisivuihin tarvitsee?</h3>
              <p>Nettisivuja tehdessä, tarvitset oman verkko-osoitteen, sekä palvelun jossa sivut ovat ylläpidettyinä. Mikäli sinulla ei vielä näitä ole, voin olla avuksi näiden hankkimisessa tai voin toteuttaa sinulle avaimet-käteen periaatteella ratkaisun. Huomioithan, että verkkotunnus, sekä web-hotelli ovat kuukausi/vuosi-tasoilla erikseen maksettavia palveluita. Jäikö jokin mietityttämään? Ota yhteyttä niin toteutetaan sinulle yhdessä paras ratkaisu!</p>
            </div>
          </div>
      </main>
      </Layout>
  )
}

export default IndexPage
