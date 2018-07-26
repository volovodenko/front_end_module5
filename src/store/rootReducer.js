import {combineReducers} from 'redux';

import home from '../containers/Home/reducers';

import subMain from '../containers/SubMain/reducers';

export default combineReducers(
    {
        home,
        subMain
        // main
    }
)

