import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useState } from "react";
import Nav from '../components/Navbar'
import { Config } from '../Config'
import { Links } from '../components/Navbar/NavbarLink/Types/Link'
import Layout from '../components/Layout';

interface Page {
  name: string;
  description: string;
  url: string;
  colors: string[];
  radialBackground: boolean;
  socials?: { name: string; username: string }[];
}

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState<Page>({
    name: "",
    description: "",
    url: "",
    colors: ["", ""],
    radialBackground: false,
  });

  const [registeredPages] = useState<Page[]>(Config.sections);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let res = window.matchMedia("only screen and (max-width: 912px)").matches;
    setIsMobile(res);
  }, [setIsMobile]);

  useEffect(() => {
    registeredPages.forEach(section => {
      if (location.pathname.includes(section.url)) {
        setCurrentPage(section);
      }
    });
  });

  return (
    <section className="h-screen md:flex md:flex-col stepper overflow-y-scroll md:overflow-hidden">
      <header className="p-10 md:p-0">
        <Nav links={Config.sections as Links} isMobile={isMobile}></Nav>
      </header>
      <Layout titleTemplate={Config.seo.defaultTitleTemplate} title={currentPage.name} description={currentPage.description} descriptionTemplate={Config.seo.defaultDescriptionTemplate} url={Config.seo.websiteUrl} radialBackground={currentPage.radialBackground} colors={currentPage.colors}>
        <Component {...pageProps} settings={currentPage} isMobile={isMobile} />
      </Layout>
    </section>
  );
}

export default MyApp;
