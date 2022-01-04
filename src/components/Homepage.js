import React from "react";
import { useShowState } from "../ShowContext";
import Header from './header';
import ImageHeader from "./HeaderImage";
import Menu from './menu/menu';
import HomeDescription from './descriptions/HomeDescription';
import WorkDescription from './descriptions/WorkDescription';
import IntroduceDescription from './descriptions/IntroduceDescription';
import GalleryDescription from "./descriptions/GalleryDescription";
import '../css/homepage_responsive.css';


function Homepage(){
    const show = useShowState();
    const state = show.show;
    return (
        <>
            <ImageHeader/>
            <Header/>
            <Menu/>
                { state === "1" ? <HomeDescription/>
                            :state==="2" ? <IntroduceDescription/>
                                :state==="3" ? <GalleryDescription/>
                                    : <HomeDescription/>
                }
        </>
    )
}

export default Homepage;