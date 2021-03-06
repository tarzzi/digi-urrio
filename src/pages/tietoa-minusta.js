import * as React from "react"
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
  const biotext = "Joku kertoi minulle ennen opiskelujen alkua, että tuolta alalta revitään kaikki töihin koulusta. No ei oo revitty töihin. Joten koska opiskelija ei tunnu pääsevän töihin suoraan, niin teen oman työpaikkani. Ota yhteyttä niin laitetaan sinulle sivut ja laitteet kuntoon! "
  return (
      <Layout >
      <main>
        <Helmet>
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <title>Digi-Urrio - Tietoa minusta </title>
          <meta name="title" content="Digi-Urrio - nettisivut ympäri suomen, tekninen tukesi jyväskylässä"/>
          <meta name="description" content="Digi-Urriolta nettisivut ja tekninen tuki, hyvään hintaan, tyytyväisyystakuulla."/>
          <meta name="keywords" content="nettisivut, nettisivu, websivut, web-sivut, kotisivu, kotisivut, tekninen tuki, digiapu, tekniikka-apu, nettisivut yritykselle, halvat nettisivut, nettisivut jyväskylä, websivut jyväskylä, verkkosivut jyväskylä, kotisivut jyväskylä, halpa, opiskelija, hyvät, hyvä, laatu"/>
          <meta name="robots" content="index, follow"/>
          <meta charset="UTF-8" />
          <meta name="language" content="Finnish"/>
          <meta name="revisit-after" content="7 days"/>
          <meta name="author" content="Tarmo Urrio" />
        </Helmet>
        <div className='bg'>
        <Banner title='Tietoa minusta' subtitle='Eli yrittäjä paketissa' idName='b4' />
        <div id='bg'>
          <div id='container' className='mt-8 w-4/5 mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center'>
              <StaticImage className='rounded-full mx-auto kuva' src='https://urrio.fi/profile.jpg' alt='Tarmo Urrio'  />
              <div className='mb-5 lg:col-span-2 md:col-span-2 sm:col-span-1' >
                <p className='font-semibold text-2xl mb-2'>Hei! Olen Tarmo, ohjelmistotekniikan opiskelija Jyväskylästä.</p>
                <p className='lg:w-3/4 md:w-3/4 sm:w-full'>{biotext}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
      </Layout>
  )
}

export default IndexPage
