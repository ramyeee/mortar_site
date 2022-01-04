import React from "react";
import styled from "styled-components";
import MenuBar from "./MenuBar";

const MenuBlock = styled.div`
    position: relative;
    width: 100%; 
    height: 48px;
    
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    border-top: 3px solid black;
    border-bottom: 3px solid black;

    @media screen and (max-width: 768px) {
        width: 99vw;
        height: 3vh;
        top: 8vh;
        margin: 0 auto;
        border: 1px solid black;
    }
`;

function Menu(){
    return(
        <>
            <MenuBlock>
                <MenuBar/>
            </MenuBlock>
        </>
    )
}

export default Menu;
 