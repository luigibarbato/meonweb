import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { useEffect } from 'react'
import { useState } from "react";
import Nav from '../components/Navbar'
import { Config } from '../components/Config'
import { Links } from '../components/Navbar/NavbarLink/Types/Link'

// import Header from '../components/Header'
// import Footer from '../components/Footer'
// TODO: Add Header and Footer
// TODO: Improve general colors,text etc.
function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `https://localhost.3000${router.route}`

  // TODO: Must be an interface/type
  const [currentPage, setCurrentPage] = useState({
    name: "",
    description: "",
    url: "",
    colors: ["", ""],
  },)

  // TODO: Must be an interface/type
  const [registeredPages] = useState(Config.sections)

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let res = window.matchMedia("only screen and (max-width: 912px)").matches;
    setIsMobile(res)
  }, [isMobile])

  useEffect(() => {
    registeredPages.forEach(section => {
      if (location.pathname.includes(section.url)) {
        setCurrentPage(section)
      }
    })
  })

  return (
    <section className="text-gray-600 min-h-screen md:flex md:flex-col stepper overflow-hidden">
      <header className="p-10 md:p-0">
        <Nav links={Config.sections as Links} isMobile={isMobile}></Nav>
      </header>
      <div className="m-auto self-center z-10">
        {/* TODO: Settings Must be an interface/type */}
        <Component {...pageProps} canonical={url} key={url} settings={currentPage} isMobile={isMobile} />
      </div>
      {/* <Footer /> */}
    </section >
  )
}

export default MyApp