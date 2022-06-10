import '../styles/globals.css'
import '../styles/carousel.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from '../components/Navbar'
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
      <section className="text-gray-600 min-h-screen md:flex md:flex-col bg-black stepper">
        <>
          <header className=''>
            <Navbar></Navbar>
          </header>
        </>
        {/* <Header /> */}
        <div className="m-auto self-center">
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} canonical={url} key={url} />
          </AnimatePresence>
        </div>
        {/* <Footer /> */}
      </section >
    </>
  )
}

export default MyApp