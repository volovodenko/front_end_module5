import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import Tags from './Tags';
import PostsGallery from './PostsGallery';
import
{
    onGetGalleryTags, onGetGalleryTag, onChangeTagRows, onSetSortTagsBy, onsetNumberTagsInRow,
    onGetHomeGalleryList, onSetLeftSort, onSetRightSort, onChangeAutoPlay,
} from './actions';

import {onChangeTakeUpVisible} from '../SubMain/actions';

const mapStateToProps = state => ({
    galleryTagsLoaded: state.home.galleryTagsLoaded,
    galleryTagsList: state.home.galleryTagsList,

    galleryTagLoaded: state.home.galleryTagLoaded,
    galleryTagList: state.home.galleryTagList,

    numberTagRows: state.home.numberTagRows,
    numberTagsInRow: state.home.numberTagsInRow,

    sortTagsBy: state.home.sortTagsBy,

    /********************************/

    homeGalleryLoaded: state.home.homeGalleryLoaded,
    homeGalleryList: state.home.homeGalleryList,
    homeGalleryIsLoading: state.home.homeGalleryIsLoading,
    fetchFail: state.home.fetchFail,

    leftSortBy: state.home.leftSortBy,
    rightSortBy: state.home.rightSortBy,

    autoPlay: state.home.autoPlay,


    takeUp: state.subMain.takeUp,
    takeUpVisible: state.subMain.takeUpVisible,


});


@connect(
    mapStateToProps,
    {
        onGetGalleryTags, onGetGalleryTag, onChangeTagRows, onSetSortTagsBy, onsetNumberTagsInRow,
        onGetHomeGalleryList, onSetLeftSort, onSetRightSort, onChangeAutoPlay,
        onChangeTakeUpVisible
    },
    null,
    {pure: false}
)
export default class Home extends Component {


    constructor(props) {
        super(props);

        if (!this.props.galleryTagsLoaded) {
            this.props.onGetGalleryTags();
        }

        if (!this.props.homeGalleryLoaded){
            this.props.onGetHomeGalleryList(0);
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0); //обнулить прокрутку
    }

    render() {


        return (
            <Fragment>
                {this.props.galleryTagsLoaded ? <Tags {...this.props}/> : null}
                {this.props.homeGalleryLoaded ? <PostsGallery {...this.props}/> : null }
            </Fragment>
        )
    }

    /***************************************************************************
     *
     **************************************************************************/

}