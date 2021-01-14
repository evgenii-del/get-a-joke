const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_JOKE":
            return {
                ...state,
                items: [...state.items, action.item]
            };
        case "ADD_JOKE_TO_FAVOURITE":
            const isContain = Boolean(...state.favourites.filter(item => item.id === action.payload));
            let newFavourites;

            if (isContain) {
                newFavourites = [...state.favourites.filter(item => item.id !== action.payload)];
            } else {
                newFavourites = state.favourites.length ?
                    [...state.favourites, ...state.items.filter(item => item.id === action.payload && !isContain)] : state.items.filter(item => item.id === action.payload);
            }

            return {
                ...state,
                favourites: newFavourites
            }
        default:
            return state;
    }
};

export default reducer;
