const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_JOKE":
            return {
                ...state,
                items: [...state.items, action.item]
            };
        default:
            return state;
    }
};

export default reducer;
