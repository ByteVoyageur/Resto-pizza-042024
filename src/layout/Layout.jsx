import Head from 'next/head'
import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>pizza-La Flambéé Italienne</title>
        <meta name='pizzaria' content='Restaurant rapide Réalemont' />
        <link rel='icon' href='assets/images/icon/logo-icon.svg' />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
