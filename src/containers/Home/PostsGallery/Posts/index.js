import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './posts.scss';
import {BASE_URL_TAGS_IMAGE} from '../../../../config';
import Loader from '../../../../components/Loader';

export default class Posts extends Component {

    constructor(props) {
        super(props);
        // console.log('create list');


        // this.state = {
        //     scroll: window.pageYOffset,
        // };

        //
        // document.addEventListener('scroll', ::this.handleScroll, false);
        // document.addEventListener('click', ::this.handleScroll, false);
    }

    componentWillUnmount() {
        // document.removeEventListener('scroll', ::this.handleScroll, false);
        // document.removeEventListener('click', ::this.handleScroll, false);
    }

    componentDidUpdate() {
        this.videoPlayPause(); //обновлять свойства воспроизведения для новых данных
    }


    render() {
        // const headerHeight = (this.props.numberTagRows * 214);
        //
        //
        // let startIndexItem = (Math.round((window.pageYOffset - (headerHeight/7.5) - 1425) / 285) + 1) * this.props.numberCardsInRow;
        //
        // if (startIndexItem < 0) {
        //     startIndexItem = 0;
        // }
        // let endIndexItem = startIndexItem + 10 * this.props.numberCardsInRow - 1;


        return (
            <ul className='gallery'>
                {

                    this.props.filteredList.map((item, index) => {
                        if (this.props.takeUp) {
                            return this.postWrapperRender(index);
                        }

                        // if (index < startIndexItem || index > endIndexItem) {
                        //     return this.postWrapperRender(index);
                        // }

                        return this.itemRender(item, index);
                    })
                }
            </ul>
        )
    }

    /***************************************************************************
     *
     **************************************************************************/

    // handleScroll() {
    //     this.setState(() => ({
    //         scroll: window.pageYOffset
    //     }));
    //
    // }

    videoPlayPause() {
        const video = document.getElementsByTagName('video');

        if (!this.props.autoPlay) {
            for (let item of video) {
                item.pause();
            }
        } else {
            for (let item of video) {
                item.play();

            }
        }
    }


    imgRender(item) {
        const imgId = item.is_album ? item.images[0].id : item.id;
        const imgStyle = this.getStyle(item);

        return (
            <img src={`${BASE_URL_TAGS_IMAGE}/${imgId}_d.jpg?maxwidth=520&amp;shape=thumb&amp;fidelity=high`}
                 style={imgStyle}
                 id={imgId}
                 onLoad={::this.onLoadHide(imgId)}
            />
        )
    }

    videoRender(item) {
        const videoId = item.is_album ? item.images[0].id : item.id;
        const typeVideo = item.is_album ? item.images[0].type : item.type;
        const videoStyle = this.getStyle(item);

        return (
            <video src={`${BASE_URL_TAGS_IMAGE}/${videoId}_lq.mp4`}
                   type={typeVideo}
                   id={videoId}
                   poster={`${BASE_URL_TAGS_IMAGE}/${videoId}_d.jpg?maxwidth=520&amp;shape=thumb&amp;fidelity=high`}
                   loop
                   onCanPlay={::this.onLoadHide(videoId)}
                   autoPlay
                   muted
                   style={videoStyle}
            />
        )
    }

    onLoadHide(id) {
        setTimeout(() => {
            const video = document.getElementById(id);
            if (video) {
                video.parentElement.parentElement.getElementsByClassName('loader')[0].style.display = 'none';
            }
        }, 500);
    }


    getStyle(item) {
        const width = item.is_album ? item.images[0].width : item.width;
        const height = item.is_album ? item.images[0].height : item.height;
        const ratio = width / 260;
        return (height / ratio) < 195 ? {height: '195px'} : {width: '260px'};
    }

    postWrapperRender(id) {
        return (
            <li className='PostWrapper' key={id}/>
        )
    }

    itemRender(item) {
        let animated;

        if (item.is_album) {
            animated = item.images[0].animated ? item.images[0].animated : false;
        } else {
            animated = item.animated ? item.animated : false;
        }

        const views = item.is_album ? item.images[0].views : item.views;

        return (
            <li key={item.id} className='gallery-item'>
                <Link to={`/gallery/${item.id}`}>

                    <div className='gallery-item_media'>
                        {animated ? this.videoRender(item) : this.imgRender(item)}
                    </div>

                    <div className='gallery-item_title-wrap'>
                        <h5>{item.title}</h5>
                        <div className='info'>
                            <div className='vote ups'>
                                <i className='fa fa-thumbs-up fa-lg' aria-hidden='true'/>
                                <span>{item.ups}</span>
                            </div>
                            <div className='vote downs'>
                                <i className='fa fa-thumbs-down fa-lg' aria-hidden='true'/>
                                <span>{item.downs}</span>
                            </div>
                            <div className='vote comments'>
                                <i className='fa fa-commenting fa-lg' aria-hidden='true'/>
                                <span>{item.comment_count}</span>
                            </div>
                            <div className='vote views'>
                                <i className='fa fa-eye fa-lg' aria-hidden='true'/>
                                <span>
                                        {views >= 1000
                                            ? Math.round(views / 1000) + 'K'
                                            : views
                                        }
                                    </span>
                            </div>
                        </div>
                    </div>

                    <Loader/>

                </Link>
            </li>
        )
    }

}