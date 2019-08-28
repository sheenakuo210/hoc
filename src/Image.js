import React from 'react';
import styled from 'styled-components';

const ImagePlace = styled.img`
    width: 100%;
`;

const Image = props => (
    <ImagePlace {...props}/>
)

export default Image
