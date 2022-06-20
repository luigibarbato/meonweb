import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components';

type Props = {
    children: ReactNode
    title: string
    description: string
    colors?: Array<String>
    radialBackground: boolean,
}

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0, transition: { duration: 1.2 } },
}

const Layout = ({ children, title, description, colors, radialBackground }: Props) => {
    const spin = keyframes`0% {
        --rotate: 0deg;
      }
      100% {
        --rotate: 360deg;
      }`

    const RadialBackground = styled.div`
      &:hover {
        color: rgb(88 199 250 / 100%);
        transition: color 1s;
      }
      &:hover:before, &:hover:after {
        animation: none;
        opacity: 0;
      }
      
      &::before {
        content: "";
        border-radius: 8px;
        background-image: linear-gradient(var(--rotate), ${colors[0] || "black"}, ${colors[1]} 43%, ${colors[2]});
          position: absolute;
          z-index: -1;
          animation: spin 2.5s linear infinite;
      }
      
      &::after {
        position: absolute;
        content: "";
        top: calc(var(--card-height) / 6);
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale(0.8);
        filter: blur(calc(var(--card-height) / 6));
        background-image: linear-gradient(var(--rotate), ${colors[0]}, ${colors[1]} 43%, ${colors[2]});
          opacity: 0.3;
        transition: opacity .5s;
        animation: ${spin} 8.5s linear infinite;
      `
    return (
        <div>
            <NextSeo title={title} description={description} openGraph={{ title, description }} />
            {/* TODO: Animation Only on Desktop */}
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'linear' }}
            >
                {radialBackground ? (
                    <RadialBackground className="container">
                        {children}
                    </RadialBackground>) : (
                    children)
                }

            </motion.main>
        </div>
    )
}

export default Layout