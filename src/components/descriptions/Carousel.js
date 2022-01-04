import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';

const CarouselPage = styled.div`
    position: relative;
    width: 70%;
    height: 40%;
    
    @media screen and (max-width: 480px) {
        width: 100vw;
        height: 40vh;
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 650px;
    margin: 0 auto;
   
    overflow: hidden;

    @media screen and (max-width: 480px) {
        width: 90vw;
        height: 30vh;
        top: 5vh;
    }
`;


const StyledImage= styled.img`
    
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    margin:0 auto;

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 80%;
        object-fit: fill;
    }
`;


const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => `translateX(${props['xPosition']}px)`}; // (*)

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 40vh;

    }
`;

function Carousel({
    images,
    setWidth,
    xPosition,
    handleClickPrev,
    handleClicknext,
    }) {
    const slideRef = useRef();

    useEffect(() => {
        if (slideRef.current) {
        const width = slideRef.current['clientWidth'];
        setWidth(width);
        }
    }, [setWidth]);

    
    return (
        <CarouselPage>
            <Wrapper>
        <Slide xPosition={xPosition} ref={slideRef}>
            {images.map((img, i) => (
            <StyledImage src={img} key={i} />
            ))}
        </Slide>
        </Wrapper>
        <Buttons
            handleClickPrev={handleClickPrev}
            handleClicknext={handleClicknext}
        />
        </CarouselPage>
        
    );
}
export default Carousel;
