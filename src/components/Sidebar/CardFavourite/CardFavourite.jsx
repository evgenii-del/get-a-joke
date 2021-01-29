import React from "react";

import "./CardFavourite.scss";


const CardFavourite = props => {
    const {id, url, value, updated_at, categories} = props.item;
    const {addJokeToFavourite} = props;

    const handleAddJokeToFavourite = () => {
        addJokeToFavourite(id);
    }

    return (
        <div className="card-favourite">
            <div className="card-favourite__top">
                            <span className="card-favourite__id">
                               ID:  <a href={url}>{id}</a>
                            </span>
                <span className="card-favourite__heart" onClick={handleAddJokeToFavourite}/>
            </div>
            <p>{value}</p>
            <div className="card-favourite__footer">
                <span>Last update: <span className="card-favourite__date">{updated_at}</span></span>
                {categories.length ? <span className="card-favourite__genre">{categories[0]}</span> : <></>}
            </div>
        </div>
    )
}

export default CardFavourite;
