import React from 'react';

const OpenLink = ({path, children}) => {
    return <a href={path} target="_blank">{children}</a>
}

export default OpenLink;