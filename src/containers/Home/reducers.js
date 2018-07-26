const initialState = {
    galleryTagsList: [],
    galleryTagsIsLoading: false,
    galleryTagsLoaded: false,

    galleryTagList: [],
    galleryTagIsLoading: false,
    galleryTagLoaded: false,

    numberTagRows: 1,
    numberTagsInRow: 1,

    sortTagsBy: 'posts',

    /*******************************************/

    homeGalleryList: [],
    homeGalleryIsLoading: false,
    homeGalleryLoaded: false,


    leftSortBy: 'most viral',
    rightSortBy: 'newest',

    autoPlay: true,

    /*******************************************/
    categoryGalleryList: [],
    categoryData: [],
    categoryGalleryIsLoading: false,
    categoryGalleryLoaded: false,

    fetchFail: false,



};

//reducer
//A reducing function returns the new state of Redux store
//as any time the action will be created with dispatch, reducer will be called.
//at the first call 'stateStore = initialState' and result initialize Redux store with data in 'stateStore'
//at the second call 'stateStore' will come from Redux store
export default function homeReducer(stateStore = initialState, action) { //stateStore - previous state

    switch (action.type) {
        case 'GALLERY_TAGS_FETCH_REQUEST':
            return Object.assign({}, stateStore, {galleryTagsIsLoading: true});
        case 'GALLERY_TAGS_FETCH_SUCCESS':
            return Object.assign({}, stateStore, {
                galleryTagsList: action.payload,
                galleryTagsIsLoading: false,
                galleryTagsLoaded: true
            });
        case 'GALLERY_TAGS_FETCH_FAIL':
            return Object.assign({}, stateStore, {galleryTagsIsLoading: false});

        /****************************************************************************/
        case 'GALLERY_TAG_FETCH_REQUEST':
            return Object.assign({}, stateStore, {galleryTagIsLoading: true});
        case 'GALLERY_TAG_FETCH_SUCCESS':
            return Object.assign({}, stateStore, {
                galleryTagList: action.payload,
                galleryTagIsLoading: false,
                galleryTagLoaded: true
            });
        case 'GALLERY_TAG_FETCH_FAIL':
            return Object.assign({}, stateStore, {galleryTagIsLoading: false});

        /****************************************************************************/
        case 'CHANGE_TAG_ROWS':
            return Object.assign({}, stateStore, {
                numberTagRows: action.payload,
            });

        /****************************************************************************/
        case 'CHANGE_SORT_TAGS':
            return Object.assign({}, stateStore, {
                sortTagsBy: action.payload,
            });

        /****************************************************************************/
        case 'SET_NUMBER_TAGS_IN_ROW':
            return Object.assign({}, stateStore, {
                numberTagsInRow: action.payload,
            });

        /****************************************************************************/



        case 'HOME_GALLERY_LIST_0_FETCH_REQUEST':
            return Object.assign({}, stateStore, {homeGalleryIsLoading: true, fetchFail: false});
        case 'HOME_GALLERY_LIST_0_FETCH_SUCCESS':
            return Object.assign({}, stateStore, {
                homeGalleryList: action.payload,
                homeGalleryIsLoading: false,
                homeGalleryLoaded: true,
                fetchFail: false
            });
        case 'HOME_GALLERY_LIST_0_FETCH_FAIL':
            return Object.assign({}, stateStore, {homeGalleryIsLoading: false, fetchFail: true});

        /****************************************************************************/
        case 'HOME_GALLERY_LIST_FETCH_REQUEST':
            return Object.assign({}, stateStore, {homeGalleryIsLoading: true, fetchFail: false});
        case 'HOME_GALLERY_LIST_FETCH_SUCCESS':
            return Object.assign({}, stateStore, {
                homeGalleryList: stateStore.homeGalleryList.concat(action.payload),
                homeGalleryIsLoading: false,
                homeGalleryLoaded: true,
                fetchFail: false
            });
        case 'HOME_GALLERY_LIST_FETCH_FAIL':
            return Object.assign({}, stateStore, {homeGalleryIsLoading: false, fetchFail: true});

        /****************************************************************************/
        case 'CATEGORY_GALLERY_LIST_0_FETCH_REQUEST':
            return Object.assign({}, stateStore, {categoryGalleryIsLoading: true, fetchFail: false});
        case 'CATEGORY_GALLERY_LIST_0_FETCH_SUCCESS':
            return Object.assign({}, stateStore, {
                categoryData: action.payload,
                categoryGalleryList: action.payload.items,
                categoryGalleryIsLoading: false,
                categoryGalleryLoaded: true,
                fetchFail: false
            });
        case 'CATEGORY_GALLERY_LIST_0_FETCH_FAIL':
            return Object.assign({}, stateStore, {categoryGalleryIsLoading: false, fetchFail: true});

        /****************************************************************************/
        case 'CATEGORY_GALLERY_LIST_FETCH_REQUEST':
            return Object.assign({}, stateStore, {categoryGalleryIsLoading: true, fetchFail: false});
        case 'CATEGORY_GALLERY_LIST_FETCH_SUCCESS':
            return Object.assign({}, stateStore, {
                categoryGalleryList: stateStore.categoryGalleryList.concat(action.payload.items),
                categoryGalleryIsLoading: false,
                categoryGalleryLoaded: true,
                fetchFail: false
            });
        case 'CATEGORY_GALLERY_LIST_FETCH_FAIL':
            return Object.assign({}, stateStore, {categoryGalleryIsLoading: false, fetchFail: true});

        /****************************************************************************/
        case 'CHANGE_LEFT_SORT':
            return Object.assign({}, stateStore, {
                leftSortBy: action.payload,
            });

        /****************************************************************************/
        case 'CHANGE_RIGHT_SORT':
            return Object.assign({}, stateStore, {
                rightSortBy: action.payload,
            });

        /****************************************************************************/
        case 'CHANGE_AUTO_PLAY':
            return Object.assign({}, stateStore, {
                autoPlay: !stateStore.autoPlay,
            });

        /****************************************************************************/
        case 'CLEAR_CATEGORY_LIST':
            return Object.assign({}, stateStore, {
                categoryGalleryList: [],
                categoryData: [],
                categoryGalleryIsLoading: false,
                categoryGalleryLoaded: false,
            });

        /****************************************************************************/
        default:
            return stateStore;
    }

}
