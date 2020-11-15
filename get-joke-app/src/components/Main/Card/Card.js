import React from "react";

import "./Card.scss";


function Card() {
    return (
        <div className="card">
            <div className="card__top">
                <span className="card__id">
                    <a href="">ID: XNaAxUduSw6zANDaIEab7E</a>
                </span>
                <span className="card__heart">
                </span>
            </div>
            <p className="card__text">
                No one truly knows who's Chuck Norris' real father. No one is
                biologically strong
                enough for this. He must've conceived himself.
            </p>
            <div className="card__footer">
                <span>Last update: <span className="date">1923</span> hours ago</span>
                <span className="card__genre">celebrity</span>
            </div>
        </div>
    );
}

export default Card;
