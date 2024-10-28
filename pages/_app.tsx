import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useState } from "react";
import Nav from '../components/Navbar'
import { Config } from '../Config'
import { Links } from '../components/Navbar/NavbarLink/Types/Link'

// TODO: Improve general colors,text etc.
function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
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
  }, [setIsMobile])

  useEffect(() => {
    registeredPages.forEach(section => {
      if (location.pathname.includes(section.url)) {
        setCurrentPage(section)
      }
    })
  })

  return (
    <section className="h-screen md:flex md:flex-col stepper overflow-y-scroll md:overflow-hidden">
      <header className="p-10 md:p-0">
        <Nav links={Config.sections as Links} isMobile={isMobile}></Nav>
      </header>
      <div className="m-auto self-center">
        {/* TODO: Settings Must be an interface/type */}
        <Component {...pageProps} settings={currentPage} isMobile={isMobile} />
      </div>
    </section >
  )
}

export default MyApp
