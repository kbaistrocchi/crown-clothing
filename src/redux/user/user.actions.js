import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({    // () = implicit return, {} = an object - implicitly return an object?
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})