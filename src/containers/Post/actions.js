import {httpRequest, checkResponse} from '../../helpers/network';

/*************************************************************************
 * GET POST COMMENTS
 *************************************************************************/
const postCommentsFetchRequest = () => ({
    type: 'POST_COMMENTS_FETCH_REQUEST'
});

const postCommentsFetchSuccess = (data) => ({
    type: 'POST_COMMENTS_FETCH_SUCCESS',
    payload: data
});

const postCommentsFetchFail = (error) => ({
    type: 'POST_COMMENTS_FETCH_FAIL',
    payload: error
});


export const onGetPostComments = (hash) => dispatch => {
    dispatch(postCommentsFetchRequest());
    const url = `gallery/${hash}/comments`;

    httpRequest(url)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(postCommentsFetchSuccess(res.data.data));
            }
        })
        .catch(err => {
            dispatch(postCommentsFetchFail(err.response.data.message));
        });
};


/*************************************************************************
 * GET ALBUM INFO
 *************************************************************************/
const albumInfoFetchRequest = () => ({
    type: 'ALBUM_INFO_FETCH_REQUEST'
});

const albumInfoFetchSuccess = (data) => ({
    type: 'ALBUM_INFO_FETCH_SUCCESS',
    payload: data
});

const albumInfoFetchFail = (error) => ({
    type: 'ALBUM_INFO_FETCH_FAIL',
    payload: error
});


export const onGetAlbumInfo = (hash) => dispatch => {
    dispatch(albumInfoFetchRequest());
    const url = `gallery/album/${hash}`;

    httpRequest(url)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(albumInfoFetchSuccess(res.data.data));
            }
        })
        .catch(err => {
            dispatch(albumInfoFetchFail(err.response.data.message));
        });
};


/*************************************************************************
 * GET IMAGE INFO
 *************************************************************************/
const imageInfoFetchRequest = () => ({
    type: 'IMAGE_INFO_FETCH_REQUEST'
});

const imageInfoFetchSuccess = (data) => ({
    type: 'IMAGE_INFO_FETCH_SUCCESS',
    payload: data
});

const imageInfoFetchFail = (error) => ({
    type: 'IMAGE_INFO_FETCH_FAIL',
    payload: error
});


export const onGetImageInfo = (hash) => dispatch => {
    dispatch(imageInfoFetchRequest());

    const url = `gallery/image/${hash}`;

    httpRequest(url)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(imageInfoFetchSuccess(res.data.data));
            }
        })
        .catch(err => {
            dispatch(imageInfoFetchFail(err.response.data.message));
        });
};


/*************************************************************************
 * CLEAR COMMENTS && POST && IMAGE INFO
 *************************************************************************/
const clearCommentsPostImage = () => ({
    type: 'CLEAR_COMMENTS_POST_IMAGE',
});

export const onclearCommentsPostImage = () => dispatch => {
    dispatch(clearCommentsPostImage());
};