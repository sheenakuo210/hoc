import React from 'react'
import styled from 'styled-components';

const BarPlace = styled.div`
    background-color: black;
    color: white;
    font-family: sans-serif;
    font-weight: bold;
    padding: 5px 10px;
    font-size: 1.2em;
`;

const Bar = (props) => (
    <BarPlace {...props}/>
)

export default Bar
