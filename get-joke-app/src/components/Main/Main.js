import React, {useContext} from "react";

import {Context} from "../../context";
import MainTitle from "./MainTitle/MainTitle";
import MainControl from "./MainControl/MainControl";
import Card from "./Card/Card";
import "./Main.scss";


function Main() {
    const {state} = useContext(Context);

    return (
        <div className="main">
            <MainTitle/>
            <div className="greeting">
                <p>Hey!</p>
                <p>Let's try to find a joke for you</p>
            </div>
            <MainControl/>
            {
                state.items.map(item => <Card item={item}/>)
            }
        </div>
    );
}

export default Main;
