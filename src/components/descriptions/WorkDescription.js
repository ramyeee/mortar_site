import React from "react";
import styled from "styled-components";
import WorkOne from '../img/work_1.jpg';

const WorkPage = styled.div`
    width: 100%;
`;

const WorkBlock = styled.div`
    width: 100%;
    margin-top: 20px;
    display: block;
    justify-content: center;
    align-items: center;
`;

const WorkImageOne = styled.img`
    margin-top : 20px;
    max-width: 40%;
    max-height: 100%;
    margin: 0px auto;
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
`;

const WorkOneDescription =styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@700&display=swap');
    font-family: 'Nanum Gothic Coding', monospace;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;


function WorkDescription(){
    return (
        <WorkPage>
            <WorkBlock>
                <WorkImageOne src={WorkOne}/>
                <WorkOneDescription> +++바닥 미장+++ </WorkOneDescription> 
            </WorkBlock>
            <WorkBlock>
                <WorkImageOne src={WorkOne}/>
                <WorkOneDescription> +++다른 일+++</WorkOneDescription>
            </WorkBlock>
        </WorkPage>
        
        
    )
}

export default WorkDescription;