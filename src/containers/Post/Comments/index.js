import React, {Component, Fragment} from 'react';

import './comments.scss';

export default class Comments extends Component {


    render() {
        const baseUrl = 'https://imgur.com';
        const commentsCount =  this.props.albumInfoLoaded
            ? this.props.albumInfo.comment_count
            : this.props.imageInfo.comment_count;
        // console.log(this.props.postComments);
        return (
            <div className='post-comments'>
                <p>{commentsCount} comments</p>
                <ul>
                    {
                        this.props.postComments.map(item => {
                            if (item.author === '[deleted]') {
                                return;
                            }

                            return (
                                <li key={item.id}>
                                    <div className='author'>
                                        <a href={`${baseUrl}/user/${item.author}`}>{item.author}</a>
                                    </div>
                                    {this.commentRender(item.comment)}
                                </li>
                            )
                        })

                    }


                </ul>


            </div>

        )
    }

    /***************************************************************************
     *
     **************************************************************************/

    commentRender(comment) {
        const re = /(https?:\/\/|ftp:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s]){2,}/gim;
        let url = comment.match(re);
        let type;
        let media;

        if (url) {
            const arr = url[0].split('.');
            type = arr[arr.length - 1];
            // console.log(type);
        } else {
            return (
                <p>{comment}</p>
            )
        }

        let src = url[0];

        if (type === 'mp4') {
            media = <video loop autoPlay muted src={src}/>
        }

        if (type === 'jpeg' || type === 'jpg' || type === 'gif') {
            media = <img src={src}/>
        }


        if (type === 'gifv') {
            src = src.replace(/\.gifv$/g, '.mp4');
            media = <video loop autoPlay muted src={src}/>
        }


        if (comment.indexOf(url) > 0) {
            return (
                <Fragment>
                    <p>{comment.substring(0, comment.indexOf(url))}</p>
                    {media}
                </Fragment>
            )
        }

        if (comment.indexOf(url) === 0) {
            return media
        }

        return null;

        // console.log(comment.substring(0, comment.indexOf(url)));
        //
        // console.log(comment);

    }
}