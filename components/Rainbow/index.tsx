import React from 'react';
import styled from 'styled-components';

import useRainbow from './hook';
import { motion, useCycle } from "framer-motion";

const showVariants = {
    open: (height = 500) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(20px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const MagicRainbowButton = ({
    intervalDelay = 1300,
    ...delegated
}) => {
    const transitionDelay = intervalDelay * 1.25;

    const colors = useRainbow({ intervalDelay });

    const colorKeys = Object.keys(colors);

    return (
        <motion.div
            {...delegated}
            style={{
                ...colors,
                transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear
        `,
                background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
            }}
            className="background min-h-screen w-screen flex"
            variants={showVariants}
        >
        </motion.div>
    );
};

const ButtonElem = styled.button`
  position: relative;
  border: none;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
`;


export default MagicRainbowButton;