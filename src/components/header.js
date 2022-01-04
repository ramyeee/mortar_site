import React from "react";
import styled from "styled-components";
import logo from './img/logo.png';

const LogoBlock = styled.div`
    width: 40%;
    height: 50px;

    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    margin-top: 30px;
    margin-left: 50px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 480px) {
        margin: 0 auto;
        width: 100vw; 
        height: 5vh;
        margin-top: 3vh;
    }
`;

const HeaderLogo = styled.img`
    height: 30px;
    width: 290px;
    margin-top: 10px;
    margin-left: 30px;
    display: flex;

    @media screen and (max-width: 480px) {
        width: 52vw; 
        height: 3.5vh;
        display:block;
        margin:0 auto;
        padding-top: 7.5vh;
    }
`;

function Header(){
    return (
        <>
            <LogoBlock>
                <HeaderLogo src={logo}/>
           </LogoBlock>
        </>
    )
}

export default Header;