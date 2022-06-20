import styled from "styled-components";
import React, { Children, isValidElement, cloneElement } from 'react';

// TODO: Use a unique file in lib/Gradient.tsx 

interface Props {
    primaryColor: string;
    secondaryColor: string;
    children: React.ReactElement;
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

export default GradientText;

