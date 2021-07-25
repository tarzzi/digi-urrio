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
        <Banner title='Nettisivut' />
        <div id='bg'>
          <div id='container' className='w-4/5 mx-auto'>
            <h2 className='text-center'>Paketit</h2>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-blue-200 p-4 grid lg:grid-cols-3 sm:grid-cols-1'>
                <div><h3>Simppeli</h3> 100€ + alv(24%)</div>
                <div className='col-span-2 sm:col-span-1'><p>Sinulle, joka tahdot yksinkertaiset sivut saadaksesi yrityksesi nettiin.<br /> <br />Sisältää nopeasti toimivan, yhden sivun nettisivun toiveidesi mukaan, sekä hakukoneoptimoinnin.</p></div>
              </div>
              <div className='bg-blue-200 p-4 grid lg:grid-cols-3 sm:grid-cols-1'>
                <div><h3>Laaja</h3> 250€ + alv(24%)</div>
                <div  className='col-span-2'><p>Sinulle, joka tahdot laajemmat sivut yrityksellesi, sisältäen esimerkiksi useamman sivun.<br /> <br />Sisältää nopeasti toimivat nettisivut, toiveidesi mukaan, sekä hakukoneoptimoinnin.</p>
                </div>
              </div>
              <div className='bg-blue-200 p-4 grid lg:grid-cols-3 sm:grid-cols-1'>
                <div><h3>Jotain muuta?</h3></div>
                <div className='col-span-2 sm:col-span-1'><p>Sinulle, joka tahdot tahdot juuri tarpeillesi räätälöidyn paketin.<br /> <br />Ota yhteyttä, niin suunnitellaan yhdessä juuri teille sopiva ratkaisu.</p></div>
              </div>
              <div className='bg-blue-200 p-4 grid lg:grid-cols-3 sm:grid-cols-1'>
                <div><h3>Palveluun sisältyy aina</h3></div>
                <div className='col-span-2 sm:col-span-1'>
                  <ul className='listline'>
                    <li>Nopeasti latautuvat sivut</li>
                    <li>Kaikille päätelaitteille skaalautuvat sivut</li>
                    <li>Hakukoneoptimointi</li>
                    <li>Tyytyväisyystakuu</li>
                  </ul></div>
              </div>
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
