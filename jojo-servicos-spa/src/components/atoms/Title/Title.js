import React from 'react';
import './style.css';

const Title = ({ children, style }) => {
    return ( <div className="title" style={style}  >{ children }</div> )
};

export default Title;
