import Head from 'next/head'
import React from 'react'
import About3 from '../components/about/About3'
import Banner3 from '../components/banner/Banner3'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import NewItem1 from '../components/tems/NewItem1'

function Index3Page() {
  return (
    <>
      <Head>
        <title>Pizzeria - La Flambée Italienne</title>
        <meta name='pizzeria' content='restaurant rapide Réalemont' />
        <link rel='icon' href='assets/images/icon/logo-icon.ico' />
      </Head>
      <Header />
      <Banner3 />
      <NewItem1 />
      <About3 />
      <Footer />
    </>
  )
}

export default Index3Page
