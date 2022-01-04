import React from "react";
import styled from "styled-components";
import header from './img/concrete_blob.png';

const HeaderImage = styled.img`
    position: absolute;
    height: 90px;
    width: 80%;
    top: 0px;
    right: 0px;
    display: flex;
    opacity: 0.3;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

const FlipImage = styled.img`
    position: absolute;
    height: 90px;
    width: 80%;
    top: 0px;
    right: 70%;
    display: flex;
    opacity: 0.3;
    transform: scaleX(-1);

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

function ImageHeader(){
    return (
        <>
            <HeaderImage src= {header}/>
            <FlipImage src={header}/>

        </>
    )
}

export default ImageHeader;