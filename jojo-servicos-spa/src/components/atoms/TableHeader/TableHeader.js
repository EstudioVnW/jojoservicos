import React from 'react';
import './style.css';

const TableHeader = ({ backgroundColor, children }) => {
    const backColor = backgroundColor || '#69B42E';
    return ( <div class="table-header" style={{backgroundColor: backColor}}>{ children }</div> );
}

export default TableHeader;