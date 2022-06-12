import '../styles/globals.css'
import '../styles/carousel.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Nav from '../components/Navbar'
import { Sections } from '../components/Config'
import { Links } from '../components/Navbar/Types/Link'
import MagicRainbowButton from '../components/Rainbow'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `https://localhost.3000${router.route}`

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return (
    <>
      <div className="noisy-left"> </div>
      <div className="noisy-right"> </div>
      <section className="text-gray-600 min-h-screen md:flex md:flex-col bg-black stepper overflow-hidden">
        <header className="p-10 md:p-0">
          <Nav links={Sections as Links}></Nav>
        </header>
        <div className="m-auto self-center">

          <Component {...pageProps} canonical={url} key={url} />
        </div>
        {/* <Footer /> */}
      </section >
    </>
  )
}

const animateOnDesktop = {

}

export default MyApp