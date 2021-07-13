import React from 'react';

const Links = ({ name,href }) => {
    return (
        <strong><a href={href}>{name}</a></strong>
    );
};

export default Links;
