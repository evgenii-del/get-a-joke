const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_JOKE":
            return {
                ...state,
                items: [action.item, ...state.items]
            };
        case "ADD_JOKE_TO_FAVOURITE":
            const isContain = Boolean(...state.favourites.filter(item => item.id === action.payload));
            let newFavourites;

            if (isContain) {
                newFavourites = [...state.favourites.filter(item => item.id !== action.payload)];
            } else {
                newFavourites = state.favourites.length ?
                    [...state.items.filter(item => item.id === action.payload && !isContain), ...state.favourites] : state.items.filter(item => item.id === action.payload);
            }

            localStorage.setItem('favourites', JSON.stringify(newFavourites));

            return {
                ...state,
                favourites: newFavourites
            }
        default:
            return state;
    }
};

export default reducer;
