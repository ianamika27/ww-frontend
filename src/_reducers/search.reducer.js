import { searchConstants } from '../_constants';

let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
const initialState = user ? { loggedIn: true, user } : {};

export function search(state = {}, action) {
    switch (action.type) {
        case searchConstants.SEARCH_REQUEST:
            return {
                loggingIn: true,
                search: action.requestbody
            };
        case searchConstants.SEARCH_SUCCESS:
            return {
                loggedIn: true,
                search: action.requestbody,
                searchResult: action.requestbody.data
            };
        case searchConstants.SEARCH_FAILURE:
            return {};
        default:
      return state
    }
}