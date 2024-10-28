import { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components';

type Props = {
  children: ReactNode
  title: string
  description: string
  colors: Array<string>
  radialBackground: boolean,
}

interface RadialBackgroundProps {
  primary: string
  secondary: string
  tertiary: string
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0, transition: { duration: 1.2 } },
}

const spin = keyframes`0% {
  --rotate: 0deg;
}
100% {
  --rotate: 360deg;
}`

const RadialBackground = styled.div<RadialBackgroundProps>`
  @property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
  }
    
  --radiusGradient-height: 50vh;
  --radiusGradient-width: calc(var(--radiusGradient-height) / 1.5);

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
    background-image: linear-gradient(var(--rotate), ${props => props.primary}, ${props => props.secondary} 43%, ${props => props.tertiary});
    position: absolute;
    z-index: -1;
    animation: spin 2.5s linear infinite;
  }

  &::after {
    will-change: transform;
    position: absolute;
    content: "";
    top: calc(var(--radiusGradient-height) / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(var(--radiusGradient-height) / 6));
    background-image: linear-gradient(var(--rotate), ${props => props.primary}, ${props => props.secondary} 43%, ${props => props.tertiary});
    opacity: 0.3;
    transition: opacity .5s;
    animation: ${spin} 8.5s linear infinite;
    @media (prefers-reduced-motion: reduce) {
      animation-duration: 16s;
      filter: blur(calc(var(--radiusGradient-height) / 4));
    }
  }
`;

const Layout = ({ children, title, description, colors, radialBackground: isRadialBackground }: Props) => {
  return (
    <div>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {isRadialBackground ? (
          <RadialBackground primary={colors[0]} secondary={colors[1]} tertiary={colors[2]} className="container mx-auto">
            {children}
          </RadialBackground>) : (
          children)
        }

      </motion.main>
    </div >
  )
}

export default Layout
