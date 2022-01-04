import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import homeImage from '../img/concrete_worker.png';
import homeDescription from '../img/HomeDescription-02.png';
import Typist from 'react-typist';
import '../../css/home.css';

const HomeBlock = styled.div`
    width: 80%;
    height: 100%; 
    margin: 0px auto;
    margin-left : 0px;

    @media screen and (max-width: 480px) {
        width: 100%; 
        height: 100vh;
    }
`;

const BackImage = styled.img`
    margin-top : 0px;
    margin-left: 0px;
    max-width: 100%;
    max-height: 100%;
    opacity: 0.75;

    .under {
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 1;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 80%;
        margin-top: 8vh;
        object-fit: cover;
        object-position: 60% 60%; 
    }
`;

const Block = styled.div`
    position: absolute;
    top: 475px;
    left: 295px;
    width: 35%; 
    height: 3px;
    
    margin-bottom: 5px;

    background: black;
    z-index: 2;

    @media screen and (max-width: 480px) {
        width: 55vw; 
        top: 34.5vh;
        left: 22%;
        height: 2px;
    }
`;

const BlockTwo= styled.div`
    position: absolute;
    top: 598px;
    left: 295px;
    width: 35%; 
    height: 2px;
    
    margin-bottom: 5px;

    background: black;
    z-index: 2;

    @media screen and (max-width: 480px) {
        width: 60%; 
        top: 42vh;
        left: 20.5%;
        height: 1px;
    }
`;

const BlockThree= styled.div`
    position: absolute;
    top: 601px;
    left: 295px;
    width: 35%; 
    height: 2px;
    
    margin-bottom: 5px;

    background: black;
    z-index: 2;

    @media screen and (max-width: 480px) {
        width: 60%; 
        top: 41.7vh;
        left: 20.5%;
        height: 1px;
    }

`;

const FrontImage = styled.img`
    position: absolute;
    top: 180px;
    left: 600px;
    width: 45%;
    opacity: 0.7;
    filter: invert(0.5);
    z-index: 2;

    @media screen and (max-width: 480px) {
        width: 40%; 
        top: 47%;
        left: 33%;
        text-align: center;
        opacity: 1;
    }
`;

function HomeDescription(){
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1);
      }, [count]);
    
    return (
        <HomeBlock>
            <BackImage src={homeImage} className="under"/>
            <h1>신 화 몰 탈 펌 프 카</h1>
            <Block/>
            <span className="description">
                {count ? (
                    <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)} cursor={{show:false, hideWhenDone:true}}>
                        책임시공 / 친절상담
                        <Typist.Backspace count={40} delay={800} />
                    </Typist>
                    ) : (
                        ""
                    )}
            </span>
            <div className="type">방통/바닥미장/휘니샤/기포/셀프몰탈</div>
            <BlockTwo/>
            <BlockThree/>
            <div className="phone">대표번호 010-3637-2900</div>
            <FrontImage src={homeDescription}/>
        </HomeBlock>
    )
}

export default HomeDescription;
