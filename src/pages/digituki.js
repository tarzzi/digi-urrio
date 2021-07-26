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
            <div id='container' className='w-4/5 mx-auto'>
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
              <div className='my-8'>
                <h3>Tähän usein kysyttyä digituesta </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in luctus est, eu auctor lacus. Suspendisse pulvinar, sem at mollis pretium, ligula justo ultrices urna, ut vestibulum odio arcu vel tortor. Donec vehicula accumsan feugiat. Duis ornare sed nisi mattis hendrerit. Sed sagittis tellus ac purus porttitor euismod. Curabitur felis nibh, hendrerit quis placerat id, placerat in quam. Nullam malesuada mollis suscipit. Etiam interdum odio non tellus ullamcorper, non fringilla eros ornare. Sed fermentum fringilla est, vehicula pellentesque ligula lobortis eu.</p>
              </div>
            </div>
        </main>
      </Layout>
  )
}

export default IndexPage
