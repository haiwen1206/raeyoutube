const initialState = [];

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_CACHE_DATA":
            console.log('state', state);
            console.log('action', action);
            state = [...state, action.payload]
            return state;
        default:
            return state;
    }
};