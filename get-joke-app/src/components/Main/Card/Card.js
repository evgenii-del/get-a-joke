import React from "react";

import "./Card.scss";


const Card = props => {
    const {id, url, value, updated_at, categories} = props.item;
    const {addJokeToFavourite, isFavourite} = props;

    const handleAddJokeToFavourite = () => {
        addJokeToFavourite(id);
    }

    return (
        <div className="card">
            <div className="card__top">
                <span className="card__id">
                   ID:  <a href={url}>{id}</a>
                </span>
                <span className={isFavourite ? "card__heart_active" : "card__heart"}
                      onClick={handleAddJokeToFavourite}/>
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
