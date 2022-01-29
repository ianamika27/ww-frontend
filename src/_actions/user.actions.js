import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

import AuthService from '../_services/AuthService';
import Api from '../_services/api'

export const userActions = {
    login,
    logout, 
    register,
    getAll,
    delete: _delete,
    loginOAuthGoogle,
    loginOAuthFacebook
};


const authService = new AuthService(new Api());

const request = (user) => { return { type: userConstants.LOGIN_REQUEST, user } }
const success = (user) =>  { return { type: userConstants.LOGIN_SUCCESS, user } }
const failure = (error) =>  { return { type: userConstants.LOGIN_FAILURE, error } }

function login(email, password) {
    return async (dispatch) => { 
        try {
            dispatch(request(email));
            const response = await authService.login(email, password);
            if(response && response.token) {
                localStorage.setItem('user', JSON.stringify(response));
            }
            dispatch(success(email));
            history.push('/homepage');
        } catch(e) {
            console.error(`Error code: ${e.code}\nError details: ${e.body}`);
            dispatch(failure(`Couldn't login user: ${email}`));
        }   
    }
}

function logout() {
    authService.logout();
    history.push('/landingpage');
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        console.log(user)
        authService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}

function loginOAuthGoogle(){
    return (dispatch) => {
        function receiveMessage(event) {
            if (event.origin !== Api.url) {
                dispatch(failure(`Couldn't login via OAuth Google!`));
                return;
            }
            if(event.data) {
                localStorage.setItem('user', event.data);
                const data = JSON.parse(event.data);
                dispatch(success(data.user.email));
                history.push('/homepage');
            }
        }
        window.open(`${Api.url}/api/v1/auth/google`, 'Google OAuth', "height=615,width=605"); 
        window.addEventListener("message", receiveMessage, false);
    }
}

function loginOAuthFacebook(){
    return (dispatch) => {
        function receiveMessage(event) {
            if (event.origin !== Api.url) {
                dispatch(failure(`Couldn't login via OAuth Facebook!`));
                return;
            }
            if(event.data) {
                console.log(event.data)
                localStorage.setItem('user', event.data);
                const data = JSON.parse(event.data);
                dispatch(success(data.user.email));
                history.push('/homepage');
            }
        }
        window.open(`${Api.url}/api/v1/auth/facebook`, 'Facebook OAuth', "height=615,width=605"); 
        window.addEventListener("message", receiveMessage, false);
    }
}