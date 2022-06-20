import React, { Children, isValidElement, cloneElement } from 'react';

// TODO: Use a unique file in lib/Gradient.tsx 

interface Props {
    primaryColor: string;
    secondaryColor: string;
    withTransparency?: number;
    withDirection?: "left" | "right";
    withDegree?: number;
    children: React.ReactElement;
}

export const GradientBackground = (props: Props) => {
    const gradient: React.CSSProperties = {
        backgroundImage: `linear-gradient(to ${props.withDirection}, ${hexToRGB(props.primaryColor, props.withTransparency ? props.withTransparency : 1)}, ${hexToRGB(props.primaryColor, 1)}`,
        backgroundSize: "100%",
    }

    return cloneElement(props.children, { style: gradient });
}

export default GradientBackground;

function hexToRGB(hex: string, alpha: number) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}
