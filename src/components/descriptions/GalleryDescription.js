import React, { useState } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import Carousel from './Carousel';
import image001 from '../img/gallery/001.jpg';
import image002 from '../img/gallery/002.jpg';
import image003 from '../img/gallery/003.jpg';
import image004 from '../img/gallery/004.jpg';
import image005 from '../img/gallery/005.jpg';
import image006 from '../img/gallery/006.jpg';
import image007 from '../img/gallery/007.jpg';
import image008 from '../img/gallery/008.jpg';
import image009 from '../img/gallery/009.png';
import image010 from '../img/gallery/010.png';
import image011 from '../img/gallery/011.png';
import image012 from '../img/gallery/012.png';
import image013 from '../img/gallery/013.png';
import image014 from '../img/gallery/014.png';
import image015 from '../img/gallery/015.png';
import image016 from '../img/gallery/016.png';

const images = [image001, image002, image003, image004, image005, image006, image007, image008, image009, image010, image011, image012, image013, image014, image015, image016];

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export default function GalleryDescription() {
    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [xPosition, setXPosition] = useState(0);

    const handleClickPrev = () => { 
        if (index === 0) return;
        setIndex(index - 1);
        setXPosition(xPosition + width);
      };
    const handleClicknext = () => {
        if (index === images.length - 1) {
          setIndex(0);
          setXPosition(0);
        } else {
          setIndex(index + 1);
          setXPosition(xPosition - width);
        }
      };

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (index === images.length - 1) {
                setIndex(0);
                setXPosition(0);
            } else {
            setIndex(index + 1);
            setXPosition(xPosition - width);
            }
        },
        onSwipedRight : () => {
            if (index === 0) return;
            setIndex(index - 1);
            setXPosition(xPosition + width);
        }

    })

    return (
        <Wrapper {...handlers}>
            <Carousel
                images={images}
                width={width}
                setWidth={setWidth}
                xPosition={xPosition}
                handleClickPrev={handleClickPrev}
                handleClicknext={handleClicknext}
            />
        </Wrapper>
  );
}
