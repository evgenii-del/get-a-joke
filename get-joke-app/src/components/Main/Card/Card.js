import React from "react";

import "./Card.scss";


function Card(props) {
    return (
        <div className="card">
            <div className="card__top">
                <span className="card__id">
                   ID:  <a href="">{props.id}</a>
                </span>
                <span className="card__heart">
                </span>
            </div>
            <p className="card__text">
                {props.body}
            </p>
            <div className="card__footer">
                <span>Last update: <span className="date">{props.date}</span> hours ago</span>
                <span className="card__genre">{props.genre}</span>
            </div>
        </div>
    );
}

export default Card;
