import React from "react";

import "./CardFavourite.scss";


const CardFavourite = props => {
    const {id, url, value, updated_at, categories} = props.item;
    const {addJokeToFavourite} = props;

    const handleAddJokeToFavourite = () => {
        addJokeToFavourite(id);
    }

    return (
        <div className="card-favour">
            <div className="card__top">
                            <span className="card__id">
                               ID:  <a href={url}>{id}</a>
                            </span>
                <span className="card__heart" onClick={handleAddJokeToFavourite}/>
            </div>
            <p>{value}</p>
            <div className="card__footer">
                <span>Last update: <span className="date">{updated_at}</span></span>
                {categories.length ? <span className="card__genre">{categories[0]}</span> : <></>}
            </div>
        </div>
    )
}

export default CardFavourite;
