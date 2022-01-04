import React from 'react';
import styled from 'styled-components';
import homeImage from '../img/concrete_worker.png';
import HandShakeCrop from '../img/handshake_crop.png';
import '../../css/introduce.css';

const HomeBlock = styled.div`
    display: flex;
    width: 100%;
    height: 100%; 

    @media screen and (max-width: 480px) {
        width: 100vw;
        height: 100vh;
        margin-top: 8vh;
    }
`;

const BackImage = styled.img`
    width: 100%;
    height: 10%;
    opacity: 0.7;
    padding-bottom: 300px;

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 50%;
        object-fit: cover;
        object-position: 49% 30%; 
    }
`;

const BlockOne = styled.div`
    position: absolute;
    top: 145px;
    left: 255px;
    width: 40%; 
    height: 2px;
    
    margin: 0px auto ;

    margin-bottom: 2px;
    display: flex;
    flex-direction: column;

    background: black;

    @media screen and (max-width: 480px) {
        width: 55vw; 
        top: 18.5vh;
        left: 22%;
        height: 1px;
    }
`;

const BlockTwo = styled.div`
    position: absolute;
    top: 148px;
    left: 255px;
    width: 40%; 
    height: 2px;
    
    margin: 0px auto ;

    margin-bottom: 2px;
    display: flex;
    flex-direction: column;

    background: black;

    @media screen and (max-width: 480px) {
        width: 55vw; 
        top: 18.3vh;
        left: 22%;
        height: 1px;
    }
`;

const IntroduceDescription =styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@700&display=swap');
    font-family: 'Nanum Gothic Coding', monospace;
    font-weight: 700;
    position: absolute;
    width: 80%;
    font-size: 1.5rem;
    text-align: center;
    margin-left: 280px;
    margin-top: 100px;

    .div {
        margin-top: 20px;
    }
    @media screen and (max-width: 480px) {
        width: 100vw;
        height: 100vh;
        margin : 0 auto;
        tetx-align: center;
    }
`;


function HomeDescription(){
    return (
        <HomeBlock>
            <BackImage src={HandShakeCrop}/>
            <IntroduceDescription>
                <h1 className="title">신화몰탈펌프카 소개</h1>
                <BlockOne/>
                <BlockTwo/>
                <h3 className="titletwo">신화몰탈펌프카 홈페이지를 방문해주셔서 감사합니다.</h3>
                <div className="introduce"> 안녕하십니까? 신화몰탈펌프카입니다. <br/>광주,전남,전북 지역 현장을 <br/><span style={{color:"red"}}>친절상담 하여 책임 있게 </span> 시공해 드립니다.<br/>
                            신화몰탈펌프카는 다양한 현장 경험을 가지고 있으며<br/>현재 지역 최고의 미장 기술자를 보유하고 있습니다.
                            <br/>믿고 맡겨주십시오! 감사합니다.<br/><br/>사전 현장 방문 후 견적 상담드립니다. <br/>010-3637-2900</div>
            </IntroduceDescription>
        </HomeBlock>
    )
}

export default HomeDescription;