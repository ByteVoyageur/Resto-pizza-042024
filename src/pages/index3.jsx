import Head from 'next/head'
import React from 'react'
import About3 from '../components/about/About3'
import Banner3 from '../components/banner/Banner3'
import Footer from '../components/footer/Footer'
import Header3 from '../components/header/Header3'
import NewItem1 from '../components/tems/NewItem1'

function Index3Page() {
  return (
    <>
      <Head>
        <title>Pizzaria - La Flambée Italienne</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='assets/images/icon/logo-icon.svg' />
      </Head>
      <Header3 />
      <Banner3 />
      <NewItem1 />
      <About3 />
      <Footer />
    </>
  )
}

export default Index3Page