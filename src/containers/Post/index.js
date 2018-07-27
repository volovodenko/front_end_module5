import React, {Component} from 'react';
import {connect} from 'react-redux';


import './post.scss';
import Content from './Content';
import Comments from './Comments';

import
{
    onGetPostComments, onGetAlbumInfo, onGetImageInfo, onclearCommentsPostImage
} from './actions';


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

});


@connect(
    mapStateToProps,
    {
        onGetPostComments, onGetAlbumInfo, onGetImageInfo, onclearCommentsPostImage
    },
    null,
    {pure: false}
)
export default class Post extends Component {


    constructor(props) {
        super(props);
        window.scrollTo(0, 0); //обнулить прокрутку

        const {postItem} = this.props.location.state;

        this.postItem = postItem;

        postItem.is_album
            ? this.props.onGetAlbumInfo(this.props.match.params.hash)
            : this.props.onGetImageInfo(this.props.match.params.hash);

        this.props.onGetPostComments(this.props.match.params.hash);

    }

    componentWillUnmount() {
        this.props.onclearCommentsPostImage();
    }


    render() {

        const contentLoaded = (this.postItem.is_album && this.props.albumInfoLoaded) || this.props.imageInfoLoaded;

        return (
            <section className='post'>
                {contentLoaded ? <Content {...this.props} postItem={this.postItem}/> : null}
                {this.props.postCommentsLoaded ? <Comments {...this.props} postItem={this.postItem}/> : null}
            </section>

        )
    }


    /***************************************************************************
     *
     **************************************************************************/

}