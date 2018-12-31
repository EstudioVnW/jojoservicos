import React from 'react';
import './style.css';

const TableHeader = ({ backgroundColor, children }) => {
    const backColor = backgroundColor || '#000';
    return ( <div className="table-header" style={{backgroundColor: backColor}}>{ children }</div> );
}

export default TableHeader;