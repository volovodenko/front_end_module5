import {combineReducers} from 'redux';

import home from '../containers/Home/reducers';
import post from '../containers/Post/reducers';
import subMain from '../containers/SubMain/reducers';

export default combineReducers(
    {
        home,
        post,
        subMain
        // main
    }
)

