import {httpRequest, checkResponse} from '../../helpers/network';


/*************************************************************************
 * GET ALL LIST OF DEFAULT TAGS
 *************************************************************************/
const galleryTagsFetchRequest = () => ({
    type: 'GALLERY_TAGS_FETCH_REQUEST'
});

const galleryTagsFetchSuccess = (data) => ({
    type: 'GALLERY_TAGS_FETCH_SUCCESS',
    payload: data
});

const galleryTagsFetchFail = (error) => ({
    type: 'GALLERY_TAGS_FETCH_FAIL',
    payload: error
});


export const onGetGalleryTags = () => dispatch => {
    dispatch(galleryTagsFetchRequest());

    httpRequest('tags/time')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(galleryTagsFetchSuccess(res.data.data.tags));
            }
        })
        .catch(err => {
            dispatch(galleryTagsFetchFail(err.response.data.message));
        });
};

/*************************************************************************
 * GET TAG METADATA AND POSTS
 *************************************************************************/
const galleryTagFetchRequest = () => ({
    type: 'GALLERY_TAG_FETCH_REQUEST'
});

const galleryTagFetchSuccess = (data) => ({
    type: 'GALLERY_TAG_FETCH_SUCCESS',
    payload: data
});

const galleryTagFetchFail = (error) => ({
    type: 'GALLERY_TAG_FETCH_FAIL',
    payload: error
});


export const onGetGalleryTag = (tagName = null, sort = 'time', page = 14, window = 'week') => dispatch => {
    dispatch(galleryTagFetchRequest());
    tagName = 'space';

    httpRequest(`gallery/t/${tagName}/${sort}/${page}/${window}`)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(galleryTagFetchSuccess(res.data.data));
            }
        })
        .catch(err => {
            dispatch(galleryTagFetchFail(err.response.data.message));
        });
};


/*************************************************************************
 * CHANGE NUMBER ROWS OF TAGS
 *************************************************************************/
const changeTagRows = (data) => ({
    type: 'CHANGE_TAG_ROWS',
    payload: data
});


export const onChangeTagRows = (rows) => dispatch => {
    dispatch(changeTagRows(rows));
};

/*************************************************************************
 * SET SORT TAGS BY (Posts || Followers)
 *************************************************************************/
const changeSortTagsBy = (data) => ({
    type: 'CHANGE_SORT_TAGS',
    payload: data
});

export const onSetSortTagsBy = (value) => dispatch => {
    dispatch(changeSortTagsBy(value));
};

/*************************************************************************
 * SET NUMBER TAGS IN ROW
 *************************************************************************/
const setNumberTagsInRow = (data) => ({
    type: 'SET_NUMBER_TAGS_IN_ROW',
    payload: data
});

export const onsetNumberTagsInRow = (value) => dispatch => {
    dispatch(setNumberTagsInRow(value));
};


/*************************************************************************
 * GET HOME LIST GALLERY
 *************************************************************************/
const homeGalleryList0FetchRequest = () => ({
    type: 'HOME_GALLERY_LIST_0_FETCH_REQUEST'
});

const homeGalleryList0FetchSuccess = (data) => ({
    type: 'HOME_GALLERY_LIST_0_FETCH_SUCCESS',
    payload: data
});

const homeGalleryList0FetchFail = (error) => ({
    type: 'HOME_GALLERY_LIST_0_FETCH_FAIL',
    payload: error
});

const homeGalleryListFetchRequest = () => ({
    type: 'HOME_GALLERY_LIST_FETCH_REQUEST'
});

const homeGalleryListFetchSuccess = (data) => ({
    type: 'HOME_GALLERY_LIST_FETCH_SUCCESS',
    payload: data
});

const homeGalleryListFetchFail = (error) => ({
    type: 'HOME_GALLERY_LIST_FETCH_FAIL',
    payload: error
});


export const onGetHomeGalleryList = (page = 0, section = 'hot', sort = 'time') => dispatch => {
    const url = `gallery/${section}/${sort}/${page}`;

    if (page === 0) {
        dispatch(homeGalleryList0FetchRequest());

        httpRequest(url)
            .then(res => {
                if (checkResponse(res)) {
                    dispatch(homeGalleryList0FetchSuccess(res.data.data));
                }
            })
            .catch(err => {
                dispatch(homeGalleryList0FetchFail(err.response.data.message));
            });
    } else {
        dispatch(homeGalleryListFetchRequest());

        httpRequest(url)
            .then(res => {
                if (checkResponse(res)) {
                    dispatch(homeGalleryListFetchSuccess(res.data.data));
                }
            })
            .catch(err => {
                dispatch(homeGalleryListFetchFail(err.response.data.message));
            });
    }

};


/*************************************************************************
 * GET CATEGORY LIST GALLERY
 *************************************************************************/
const categoryGalleryList0FetchRequest = () => ({
    type: 'CATEGORY_GALLERY_LIST_0_FETCH_REQUEST'
});

const categoryGalleryList0FetchSuccess = (data) => ({
    type: 'CATEGORY_GALLERY_LIST_0_FETCH_SUCCESS',
    payload: data
});

const categoryGalleryList0FetchFail = (error) => ({
    type: 'CATEGORY_GALLERY_LIST_0_FETCH_FAIL',
    payload: error
});

const categoryGalleryListFetchRequest = () => ({
    type: 'CATEGORY_GALLERY_LIST_FETCH_REQUEST'
});

const categoryGalleryListFetchSuccess = (data) => ({
    type: 'CATEGORY_GALLERY_LIST_FETCH_SUCCESS',
    payload: data
});

const categoryGalleryListFetchFail = (error) => ({
    type: 'CATEGORY_GALLERY_LIST_FETCH_FAIL',
    payload: error
});


export const onGetCategoryGalleryList = (tagName, page = 0, sort = 'viral', window = 'week') => dispatch => {
    const url = `gallery/t/${tagName}/${sort}/${window}/${page}`;

    if (page === 0) {
        dispatch(categoryGalleryList0FetchRequest());
        httpRequest(url)
            .then(res => {
                if (checkResponse(res)) {
                    dispatch(categoryGalleryList0FetchSuccess(res.data.data));
                }
            })
            .catch(err => {
                dispatch(categoryGalleryList0FetchFail(err.response.data.message));
            });
    } else {
        dispatch(categoryGalleryListFetchRequest());

        httpRequest(url)
            .then(res => {
                if (checkResponse(res)) {
                    dispatch(categoryGalleryListFetchSuccess(res.data.data));
                }
            })
            .catch(err => {
                dispatch(categoryGalleryListFetchFail(err.response.data.message));
            });
    }

};


/*************************************************************************
 * SET LEFT SORT BY (Most Viral || User Submitted)
 *************************************************************************/
const changeLeftSort = (data) => ({
    type: 'CHANGE_LEFT_SORT',
    payload: data
});

export const onSetLeftSort = (value) => dispatch => {
    dispatch(changeLeftSort(value));
};

/*************************************************************************
 * SET RIGHT SORT BY (Newest || Popular || Random || Rising)
 *************************************************************************/
const changeRightSort = (data) => ({
    type: 'CHANGE_RIGHT_SORT',
    payload: data
});

export const onSetRightSort = (value) => dispatch => {
    dispatch(changeRightSort(value));
};

/*************************************************************************
 * SET VIDEO AUTO PLAY
 *************************************************************************/
const changeAutoPlay = () => ({
    type: 'CHANGE_AUTO_PLAY',
});

export const onChangeAutoPlay = () => dispatch => {
    dispatch(changeAutoPlay());
};


/*************************************************************************
 * CLEAR CATEGORY LIST
 *************************************************************************/
const clearCategoryGalleryList = () => ({
    type: 'CLEAR_CATEGORY_LIST',
});

export const onClearCategoryGalleryList = () => dispatch => {
    dispatch(clearCategoryGalleryList());
};

/*************************************************************************
 * SET CURRENT CATEGORY
 *************************************************************************/
const setCurrentCategory = (data) => ({
    type: 'SET_CURRENT_CATEGORY',
    payload: data
});

export const onSetCurrentCategory = (data) => dispatch => {
    dispatch(setCurrentCategory(data));
};

