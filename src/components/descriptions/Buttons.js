import React from 'react';
import styled from 'styled-components';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'; // Svg Icon

const Button = styled.button`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  color: white;
  font-size: 30px;
  transform: translateY(-50%);
  text-align : center;
  background-color: black;
  bacground-repeat: no-repeat;
  border: none;
  border-radius: 35px;
  cursor:pointer;
  padding-top:5px;

  left: ${props => props.side === 'prev' && 5}px;
  right: ${props => props.side === 'next' && 5}px;

  @media screen and (max-width: 480px) {
    position: absolute;
    height: 30vh;
    width: 5vw;
    top: 50%;
    z-index: 10;
    color: white;
    font-size: 10px;
    transform: translateY(-50%);
    text-align : center;
    background-color: black;
    bacground-repeat: no-repeat;
    border: none;
    border-radius: 2px;
    cursor:pointer;
    padding-bottom: 5px;

    left: ${props => props.side === 'prev' && 5}px;
    right: ${props => props.side === 'next' && 5}px;
  }
`;

function Buttons({ handleClickPrev, handleClicknext }) {
  return (
    <>
      <Button side="prev" onClick={handleClickPrev} >
        <AiOutlineArrowLeft/>
        </Button>
      <Button side="next" onClick={handleClicknext}>
        <AiOutlineArrowRight/>
        </Button>
    </>
  );
}
export default Buttons;