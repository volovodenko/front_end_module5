import React, {Component} from 'react';
import {connect} from 'react-redux';


import './post.scss';
import Content from './Content';
import Comments from './Comments';

import
{
    onGetPostComments, onGetAlbumInfo, onGetImageInfo, onClearCommentsPostImage
} from './actions';
import {onChangeTakeUpVisible} from '../SubMain/actions';


const mapStateToProps = state => ({

    postComments: state.post.postComments,
    postCommentsIsLoading: state.post.postCommentsIsLoading,
    postCommentsLoaded: state.post.postCommentsLoaded,

    albumInfo: state.post.albumInfo,
    albumInfoIsLoading: state.post.albumInfoIsLoading,
    albumInfoLoaded: state.post.albumInfoLoaded,

    imageInfo: state.post.imageInfo,
    imageInfoIsLoading: state.post.imageInfoIsLoading,
    imageInfoLoaded: state.post.imageInfoLoaded,

    takeUpVisible: state.subMain.takeUpVisible,

    // homeGalleryLoaded: state.home.homeGalleryLoaded,
    // homeGalleryList: state.home.homeGalleryList,
    //
    // categoryGalleryList: state.home.categoryGalleryList,
    // categoryGalleryLoaded: state.home.categoryGalleryLoaded,

});


@connect(
    mapStateToProps,
    {
        onGetPostComments, onGetAlbumInfo, onGetImageInfo, onClearCommentsPostImage,
        onChangeTakeUpVisible
    },
    null,
    {pure: false}
)
export default class Post extends Component {


    constructor(props) {
        super(props);
        window.scrollTo(0, 0); //обнулить прокрутку

        // const arrayList = [].concat(this.props.homeGalleryList, this.props.categoryGalleryList);
        //
        // const filtered = arrayList.filter(item => item.id === this.props.match.params.hash);
        // console.log(f[0]);
        //
        // this.postItem = filtered[0];

        this.props.onGetAlbumInfo(this.props.match.params.hash);
        this.props.onGetImageInfo(this.props.match.params.hash);

        // postItem.is_album
        //     ? this.props.onGetAlbumInfo(this.props.match.params.hash)
        //     : this.props.onGetImageInfo(this.props.match.params.hash);

        this.props.onGetPostComments(this.props.match.params.hash);

        this.handleScroll = ::this.handleScroll;
        this.lastScroll = 0;

    }

    componentWillUnmount() {
        this.props.onClearCommentsPostImage();
        document.removeEventListener('scroll', this.handleScroll, false);
        document.removeEventListener('click', this.handleScroll, false);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll, false);
        document.addEventListener('click', this.handleScroll, false);
    }


    render() {

        const contentLoaded = this.props.albumInfoLoaded || this.props.imageInfoLoaded;

        return (
            <section className='post'>
                {contentLoaded ? <Content {...this.props} /> : null}
                {this.props.postCommentsLoaded ? <Comments {...this.props}/> : null}
            </section>

        )
    }


    /***************************************************************************
     *
     **************************************************************************/

    handleScroll() {
        const currentScroll = window.pageYOffset;

        const deltaScroll = currentScroll - this.lastScroll;
        this.lastScroll = currentScroll;

        if (deltaScroll > 0) { //двигаемся вниз
            // (scrollHeight - currentScroll - clientHeight) < 300

            if (currentScroll > 800 && !this.props.takeUpVisible) {
                this.props.onChangeTakeUpVisible(true);
            }


        } else { //двигаемся вверх

            if (currentScroll < 300 && this.props.takeUpVisible) {
                this.props.onChangeTakeUpVisible(false);
            }


        }

    }

}