import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import PostsGallery2 from './PostsGallery2';

import
{
    onGetCategoryGalleryList, onSetRightSort, onChangeAutoPlay, onClearCategoryGalleryList,
    onSetCurrentCategory,
} from '../Home/actions';

import {onChangeTakeUpVisible} from '../SubMain/actions';

const mapStateToProps = state => ({

    /********************************/
    categoryData: state.home.categoryData,
    categoryGalleryList: state.home.categoryGalleryList,
    categoryGalleryIsLoading: state.home.categoryGalleryIsLoading,
    categoryGalleryLoaded: state.home.categoryGalleryLoaded,

    fetchFail: state.home.fetchFail,

    rightSortBy: state.home.rightSortBy,

    autoPlay: state.home.autoPlay,

    currentCategory: state.home.currentCategory,

    takeUp: state.subMain.takeUp,
    takeUpVisible: state.subMain.takeUpVisible,


});


@connect(
    mapStateToProps,
    {
        onGetCategoryGalleryList, onSetRightSort, onChangeAutoPlay, onClearCategoryGalleryList,
        onSetCurrentCategory,
        onChangeTakeUpVisible
    },
    null,
    {pure: false}
)
export default class Categories extends Component {


    constructor(props) {
        super(props);
        // window.scrollTo(0, 0); //обнулить прокрутку

        if (this.props.currentCategory !== this.props.match.params.tag) {
            this.props.onClearCategoryGalleryList();
            this.props.onGetCategoryGalleryList(this.props.match.params.tag, 0);
        }

        this.props.onSetCurrentCategory(this.props.match.params.tag);

        // this.props.onGetCategoryGalleryList(this.props.match.params.tag, 0);
    }

    componentWillUnmount(){
        // this.props.onClearCategoryGalleryList();
    }

    render() {


        return (
            this.props.categoryGalleryLoaded ?
                <Fragment>
                    <Header {...this.props}/>
                    <PostsGallery2 {...this.props}/>
                </Fragment>
                : null

        )
    }

    /***************************************************************************
     *
     **************************************************************************/

}