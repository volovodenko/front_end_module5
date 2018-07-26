const initialState = {
    takeUp: false,
    takeUpVisible: false


};

//reducer
//A reducing function returns the new state of Redux store
//as any time the action will be created with dispatch, reducer will be called.
//at the first call 'stateStore = initialState' and result initialize Redux store with data in 'stateStore'
//at the second call 'stateStore' will come from Redux store
export default function subMainReducer(stateStore = initialState, action) { //stateStore - previous state

    switch (action.type) {
        case 'CHANGE_TAKE_UP':
            return Object.assign({}, stateStore, {
                takeUp: !stateStore.takeUp,
            });

        /****************************************************************************/
        case 'CHANGE_TAKE_UP_VISIBLE':
            return Object.assign({}, stateStore, {
                takeUpVisible: action.payload,
            });

        /****************************************************************************/
        default:
            return stateStore;
    }

}
