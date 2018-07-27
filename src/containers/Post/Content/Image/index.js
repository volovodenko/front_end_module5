import React, {Component} from 'react';

import {BASE_URL_IMAGES} from '../../../../config';
import './image.scss';

export default class Image extends Component {

    render() {

        return (
            <div className='post-content_image'>

                {this.props.postItem.is_album ? this.albumRender() : this.itemRender()}

            </div>

        )
    }

    /***************************************************************************
     *
     **************************************************************************/

    albumRender() {
        return (
            <ul>
                {
                    this.props.albumInfo.images.map(item => {
                        return (
                            <li key={item.id}>
                                {item.animated ? this.videoRender(item.id, item.type) : this.imgRender(item.id)}
                            </li>
                        )
                    })

                }
            </ul>
        );
    }


    imgRender(imgId) {
        return <img src={`${BASE_URL_IMAGES}/${imgId}.jpg`}/>
    }


    videoRender(videoId, typeVideo) {

        return (
            <video src={`${BASE_URL_IMAGES}/${videoId}.mp4`}
                   type={typeVideo}
                   controls
                   loop
                   muted
                   autoPlay
            />
        )
    }

    itemRender() {
        const imgId = this.props.imageInfo.id;
        const animated = this.props.imageInfo.animated;
        const type = this.props.imageInfo.type;

        return animated ? this.videoRender(imgId, type) : this.imgRender(imgId);

    }
}