const initialState = {
    postComments: [],
    postCommentsIsLoading: false,
    postCommentsLoaded: false,

    albumInfo: [],
    albumInfoIsLoading: false,
    albumInfoLoaded: false,

    imageInfo: [],
    imageInfoIsLoading: false,
    imageInfoLoaded: false,
};

//reducer
//A reducing function returns the new state of Redux store
//as any time the action will be created with dispatch, reducer will be called.
//at the first call 'stateStore = initialState' and result initialize Redux store with data in 'stateStore'
//at the second call 'stateStore' will come from Redux store
export default function postReducer(stateStore = initialState, action) { //stateStore - previous state

    switch (action.type) {
        case 'POST_COMMENTS_FETCH_REQUEST':
            return Object.assign({}, stateStore, {postCommentsIsLoading: true});
        case 'POST_COMMENTS_FETCH_SUCCESS':
            return Object.assign({}, stateStore, {
                postComments: action.payload,
                postCommentsIsLoading: false,
                postCommentsLoaded: true
            });
        case 'POST_COMMENTS_FETCH_FAIL':
            return Object.assign({}, stateStore, {postCommentsIsLoading: false});

        /****************************************************************************/
        case 'ALBUM_INFO_FETCH_REQUEST':
            return Object.assign({}, stateStore, {albumInfoIsLoading: true});
        case 'ALBUM_INFO_FETCH_SUCCESS':
            return Object.assign({}, stateStore, {
                albumInfo: action.payload,
                albumInfoIsLoading: false,
                albumInfoLoaded: true
            });
        case 'ALBUM_INFO_FETCH_FAIL':
            return Object.assign({}, stateStore, {albumInfoIsLoading: false});

        /****************************************************************************/
        case 'IMAGE_INFO_FETCH_REQUEST':
            return Object.assign({}, stateStore, {imageInfoIsLoading: true});
        case 'IMAGE_INFO_FETCH_SUCCESS':
            return Object.assign({}, stateStore, {
                imageInfo: action.payload,
                imageInfoIsLoading: false,
                imageInfoLoaded: true
            });
        case 'IMAGE_INFO_FETCH_FAIL':
            return Object.assign({}, stateStore, {imageInfoIsLoading: false});

        /****************************************************************************/
        case 'CLEAR_COMMENTS_POST_IMAGE':
            return Object.assign({}, stateStore, {
                postComments: [],
                postCommentsLoaded: false,

                albumInfo: [],
                albumInfoLoaded: false,

                imageInfo: [],
                imageInfoLoaded: false,
            });


        /****************************************************************************/
        default:
            return stateStore;
    }

}
