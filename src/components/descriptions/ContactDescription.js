import React from 'react';
import styled from 'styled-components';
import { ImPhoneHangUp }  from 'react-icons/im';


const ContactBlock = styled.div`
    width: 100%;
    height: 800px;
    background: #2B252B;
    margin-top: 20px;
`;

const Phone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 200px;
    width: 150px;
    height: 150px;
    color: white;
    font-size: 130px;
    margin: 0px auto;
`;

const ContactInfoBlock = styled.div`
    position: relative;
    width: 30%; 
    height: 3px;
    
    margin: 0px auto ;

    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    background: white;
`;
 

const ContactInfoName = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@700&display=swap');
    font-family: 'Nanum Gothic Coding', monospace;
    font-weight: 700;
    width: auto;
    color: white;
    font-size: 2.5rem;
    
    margin-top: 30px; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContactInfoNumber = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@700&display=swap');
    font-family: 'Nanum Gothic Coding', monospace;
    font-weight: 700;
    width: auto;
    color: white;
    font-size: 2.0rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

function ContactDescription() {
    return(
        <ContactBlock>
            <Phone>
                <ImPhoneHangUp/>
            </Phone>
            <ContactInfoBlock/>
            <ContactInfoBlock/>
            <ContactInfoName>대표번호</ContactInfoName>
            <ContactInfoNumber>010-3637-2900</ContactInfoNumber>
        </ContactBlock>
    )
}

export default ContactDescription;