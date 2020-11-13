import React from "react";
import MainTitle from "./MainTitle/MainTitle";
import MainControl from "./MainControl/MainControl";

import "./Main.scss";


function Main() {
    return (
        <div className="main-menu">
            <div className="main">
                <MainTitle/>

                <div className="greeting">
                    <p>Hey!</p>
                    <p>Let's try to find a joke for you</p>
                </div>

                <MainControl/>

                <div className="card" data-id="XNaAxUduSw6zANDaIEab7E">
                    <div className="card-content">
                        <span className="heart" data-id="XNaAxUduSw6zANDaIEab7E"/>
                        <span className="id">
                                ID: <a className="identifier" href="">XNaAxUduSw6zANDaIEab7E<img src=""
                                                                                                 alt="heart"/></a>
                            </span>
                        <p className="text">No one truly knows who's Chuck Norris' real father. No one is
                            biologically strong
                            enough for this. He must've conceived himself.</p>
                        <div className="card-footer">
                            <span>Last update: <span className="date">1923</span> hours ago</span>
                            <span className="genre">celebrity</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
