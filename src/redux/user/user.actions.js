export const setCurrentUser = user => ({    // () = implicit return, {} = an object - implicitly return an object?
    type: 'SET_CURRENT_USER',
    payload: user
})