import { searchConstants } from '../_constants';
import { searchService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const searchActions = {
    search
};

function search(requestbody) {
    return dispatch => {
        dispatch(request({ requestbody }));

        searchService.search(requestbody)
            .then(
                response => { 
                    console.log('response')
                    console.log(response)
                    dispatch(success(response));
                    // history.push('/myshows');
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(requestbody) { return { type: searchConstants.SEARCH_REQUEST, requestbody } }
    function success(requestbody) { return { type: searchConstants.SEARCH_SUCCESS, requestbody } }
    function failure(error) { return { type: searchConstants.SEARCH_FAILURE, error } }
}