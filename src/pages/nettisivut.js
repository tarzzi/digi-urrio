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
        <Banner title='Nettisivut' />
        <div id='bg'>
          <div id='container' className='w-4/5 mx-auto'>
            <h2 className='text-center'>Paketit</h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
              <ServiceCard title='Simppeli' price='100€ + alv(24%)'>
                <div className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
                  <p>Sinulle, joka tahdot yksinkertaiset sivut saadaksesi itsesi tai yrityksesi nettiin.<br /> <br />
                    Sisältää nopeasti toimivan, yhden sivun nettisivun toiveidesi mukaan, sekä hakukoneoptimoinnin.</p>
                </div>
              </ServiceCard>
              <ServiceCard title='Laaja' price='250€ + alv(24%)'>
                <div  className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
                  <p>Sinulle, joka tahdot laajemmat sivut, sisältäen esimerkiksi useamman sivun.<br /> <br />
                    Sisältää nopeasti toimivat nettisivut, toiveidesi mukaan, sekä hakukoneoptimoinnin.</p>
                </div>
              </ServiceCard>
              <ServiceCard title='Jotain muuta?'>
                <div className='lg:col-span-2 md:col-span-2 sm:col-span-1'><p>Sinulle, joka tahdot tahdot juuri tarpeillesi räätälöidyn paketin.<br /> <br />Ota yhteyttä, niin suunnitellaan yhdessä juuri teille sopiva ratkaisu.</p></div>
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
              <p>Mitä palveluun kuuluu?<br />Jos sinun ei tarvitse olla päivittämässä blogia, tai
                haluat vain näkyvyyttä internettiin itsellesi tai yrityksellesi, voin olla ratkaisusi.
                Toteutan nettisivut teidän visiota noudattaen ja annan lopputulokselle tyytyväisyystakuun.
                Mikäli sinua ei miellytä, hienosäädetään kunnes miellyttää! Lasku saapuu vasta, kun olet tyytyväinen tulokseen.
                Näyttävät, toimivat, eri laitteilla pelittävät, nopeasti latautuvat sivut joissa on hakukoneoptimointi mukana.</p>
            </div>
            <div id='contact'></div>
          </div>
      </main>
      </Layout>
  )
}

export default IndexPage
