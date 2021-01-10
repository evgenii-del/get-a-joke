import React, {useContext, useRef} from "react";

import MainControl from "./MainControl/MainControl";
import MainTitle from "./MainTitle/MainTitle";
import {Context} from "../../context";
import Card from "./Card/Card";
import "./Main.scss";


const Main = props => {
    const {state} = useContext(Context);
    const {sidebarRef} = props;
    const mainRef = useRef();

    return (
        <div className="main" ref={mainRef}>
            <MainTitle mainRef={mainRef} sidebarRef={sidebarRef}/>
            <div className="greeting">
                <p>Hey!</p>
                <p>Let's try to find a joke for you</p>
            </div>
            <MainControl/>
            {
                state.items.map((item, index) => <Card item={item} key={index}/>)
            }
        </div>
    );
}

export default Main;
