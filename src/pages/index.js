import * as React from "react"
import {Link} from 'gatsby';
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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Finnish"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="author" content="Tarmo Urrio" />

      </Helmet>
      <Banner title='DIGI-URRIO' subtitle='Ei pelkkää koodia' idName='b1' />
      <Link to='/nettisivut' className='link'>
            <div id='nettisivut' className='w-1/2 text-center py-20'>
                <h2>Nettisivut</h2>
            </div>
      </Link>
      <Link to='/digituki' className='link'>
            <div id='digituki' className='w-1/2 text-center py-20'>
              <h2>Digituki</h2>
            </div>
      </Link>
      <div className='clear-both'></div>
      <div className='text-center mt-10 mb-5'>
        <h3>Nettisivut, sekä tekninen tuki suoraan Jyväskylästä.</h3>
        <h3>Tyytyväisyystakuulla!</h3>
      </div>
      </main>
      </Layout>
  )
}

export default IndexPage
