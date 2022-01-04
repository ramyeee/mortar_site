import React from "react";
import styled from 'styled-components';
import { useShowDispatch } from "../../ShowContext";
import '../../css/menu.css';

const MenuBlock = styled.div`
   text-align: center;
`
const MenuItem = styled.button`
    text-align : center;
    background-color: transparent;
    bacground-repeat: no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline: none;
    color: black;
    margin:  5px 70px auto;

    &:hover{
        color: #1864ab;
    }

    @media screen and (max-width: 480px) {
        width: 15vw;
        margin: 0px 1vw auto; 
    }
`;

function MenuBar() { 
    const dispatch = useShowDispatch();
    const onHome = () => dispatch({type: 'CHANGE', show: "1"});
    const onIntroduce = () => dispatch({type: 'CHANGE', show: "2"});
    const onGallery = () => dispatch({type: 'CHANGE', show: "3"});

    return (
        <>
            <MenuBlock>
                <MenuItem onClick={onHome} className="item">HOME</MenuItem>
                <MenuItem onClick={onIntroduce} className="item">인사말</MenuItem>
                <MenuItem onClick={onGallery} className="item">갤러리</MenuItem>
            </MenuBlock>
        </>
    )
}

export default MenuBar;