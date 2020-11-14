import React from "react";

import "./Card.scss";


function Card() {
    return (
        <div className="card">
            <span className="card__heart"/>
            <span className="card__id">
                        ID: <a className="identifier" href="">XNaAxUduSw6zANDaIEab7E</a>
                        <img src="" alt="heart"/>
                    </span>
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
