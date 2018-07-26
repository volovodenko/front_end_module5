import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import TakeUp from '../../components/TakeUp';
import Loader from '../../components/Loader';
import {onChangeTakeUp, onChangeTakeUpVisible} from './actions';

const mapStateToProps = state => ({
    takeUp: state.subMain.takeUp,
    takeUpVisible : state.subMain.takeUpVisible,

    homeGalleryIsLoading: state.home.homeGalleryIsLoading,

});


@connect(
    mapStateToProps,
    {onChangeTakeUp, onChangeTakeUpVisible},
    null,
    {pure: false}
)
export default class SubMain extends Component {


    render() {
        return (
            <Fragment>
                { this.props.takeUpVisible ? <TakeUp {...this.props}/>: null }

                {this.props.homeGalleryIsLoading ? <Loader/> : null}
            </Fragment>
        )
    }

    /***************************************************************************
     *
     **************************************************************************/

}