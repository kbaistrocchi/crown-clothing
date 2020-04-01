const INITIAL_STATE = {
    currentUser: null
}

// remember, every single reducer gets every single action, even if it's not related
// to that specific reducer. Therefore, always default return state

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state
    }
};

export default userReducer;