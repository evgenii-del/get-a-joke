import React from "react";

import "./Card.scss";


const Card = props => {
    const {id, url, value, updated_at, categories} = props.item;

    return (
        <div className="card">
            <div className="card__top">
                <span className="card__id">
                   ID:  <a href={url}>{id}</a>
                </span>
                <span className="card__heart">
                </span>
            </div>
            <p className="card__text">
                {value}
            </p>
            <div className="card__footer">
                <span>Last update: <span className="date">{updated_at}</span></span>
                {categories.length ? <span className="card__genre">{categories[0]}</span> : <></>}
            </div>
        </div>
    );
}

export default Card;
