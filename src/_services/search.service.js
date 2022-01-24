import config from 'config';
import { authHeader } from '../_helpers';

import axios from 'axios';

const API_URL = 'http://localhost:9001';

export const searchService = {
    search
};

function search(search_requestbody) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: search_requestbody
    };

    return axios.post(API_URL+'/api/v1/search/search_moviename', requestOptions)
    .then(response => {
        console.log("search success");
        console.log(response)
        return response;
    })
}



