/* eslint-disable array-callback-return */
import React from 'react';

import { range, generateId } from './utils';
import useIncrementingNumber from './incrementingNumbeer'

const rainbowColors = [
    'hsl(1deg, 96%, 55%)', // red
    'hsl(25deg, 100%, 50%)', // orange
    'hsl(40deg, 100%, 50%)', // yellow
    'hsl(45deg, 100%, 50%)', // yellow
    'hsl(66deg, 100%, 45%)', // lime
    'hsl(130deg, 100%, 40%)', // green
    'hsl(177deg, 100%, 35%)', // aqua
    'hsl(230deg, 100%, 45%)', // blue
    'hsl(240deg, 100%, 45%)', // indigo
    'hsl(260deg, 100%, 55%)', // violet
    'hsl(325deg, 100%, 48%)', // pink
];
const paletteSize = rainbowColors.length;
const WINDOW_SIZE = 3;

// During compile-time build, we have to assume no browser support.
// On mount, we'll check if `CSS.registerProperty` exists

const getColorPropName = (id, index) => `--magic-rainbow-color-${id}-${index}`;


const useRainbow = ({ intervalDelay = 2000 }) => {
    // Register all custom properties.
    // This only ever needs to be done once, so there are no dependencies.
    React.useEffect(() => {
        for (let i = 0; i < 3; i++) {
            try {
                CSS.registerProperty({
                    name: `--magic-rainbow-color-${i}`,
                    initialValue: rainbowColors[i],
                    syntax: '<color>',
                    inherits: false,
                });
            } catch (err) {
                console.log(err);
            }
        }
    }, []);
    // Get an ever-incrementing number from another custom hook*
    const intervalCount = useIncrementingNumber(intervalDelay);
    // Using that interval count, derive each current color value
    return {
        '--magic-rainbow-color-0': rainbowColors[(intervalCount + 1) % paletteSize],
        '--magic-rainbow-color-1': rainbowColors[(intervalCount + 2) % paletteSize],
        '--magic-rainbow-color-2': rainbowColors[(intervalCount + 3) % paletteSize],
    };
};

export default useRainbow;