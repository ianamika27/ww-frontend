import config from 'config';
import { authHeader } from '../_helpers';

import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const userService = {
    login,
    logout,
    register,
    update,
    delete: _delete
};

function login(username, password) {
    const requestOptions = { 
        username : username,
        password : password
    };

    return axios.post(API_URL+'/api/v1/users/login', requestOptions)
    .then(user => {
            console.log("login success" +user)
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
    })
    
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    return axios.post(API_URL+'/api/v1/users/register', user)
    .then(user => {
       return user;
    })
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}