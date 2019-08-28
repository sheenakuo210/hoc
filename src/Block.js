import React from 'react'
import styled from 'styled-components';

const BlockPlace = styled.div`
    display: inline-block;
    width: 300px;
    height: 100%;
    margin: 10px;
    vertical-align: top;
    border: 1px solid #eee;
`;

const Block = props => (
    <BlockPlace>
        {props.children}
    </BlockPlace>
)


export default Block
