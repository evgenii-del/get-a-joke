import React from "react";
import MainTitle from "./MainTitle/MainTitle";
import MainControl from "./MainControl/MainControl";
import Card from "./Card/Card";

import "./Main.scss";


function Main() {
    return (
        <div className="main">

            <MainTitle/>

            <div className="greeting">
                <p>Hey!</p>
                <p>Let's try to find a joke for you</p>
            </div>

            <MainControl/>

            <Card/>

        </div>
    );
}

export default Main;
