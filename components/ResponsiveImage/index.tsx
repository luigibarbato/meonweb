import React from 'react';

interface ResponsiveImageProps {
    isMobile: boolean;
    image: string;
    useOutline?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ isMobile, image, useOutline = true }) => {
    const size = isMobile ? "150px" : "300px";
    const outlineClass = useOutline ? "outline-dashed outline-offset-8 outline-cyan-300" : "";
    const className = isMobile
        ? `overflow-hidden object-cover object-center aspect-square rounded-full ${outlineClass} h-36 w-36`
        : `overflow-hidden object-cover object-center aspect-square rounded-full ${outlineClass} h-[300] w-[350]`;

    {/* TODO: replace with Next/image */ }
    return <img width={size} height={size} className={className} src={image} alt="" />;
};

export default ResponsiveImage;
