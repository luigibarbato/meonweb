import React, { Children, isValidElement, cloneElement } from 'react';

interface Props {
    primaryColor: string;
    secondaryColor: string;
    withTransparency?: number;
    direction: "left" | "right";
    children: React.ReactElement;
}

export const GradientBackground = (props: Props) => {
    const gradient: React.CSSProperties = {
        backgroundImage: `linear-gradient(to ${props.direction}, ${hexToRGB(props.primaryColor, props.withTransparency ? props.withTransparency : 1)}, ${hexToRGB(props.primaryColor, 1)}`,
        backgroundSize: "100%",
    }

    return cloneElement(props.children, { style: gradient });
}


export const GradientText = (props: Props) => {
    const gradient: React.CSSProperties = {
        backgroundImage: `linear-gradient(45deg, ${props.primaryColor}, ${props.secondaryColor})`,
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        MozBackgroundClip: "text",
    }

    return cloneElement(props.children, { style: gradient });
}


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
