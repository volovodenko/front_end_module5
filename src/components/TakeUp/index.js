import React, {Component} from 'react';

import './takeUp.scss';


export default class TakeUp extends Component {
    render() {
        return (
            <div className='takeUp' onClick={::this.goUp}>
                <span className='text'>take me up</span>
                <i className='fa fa-long-arrow-up fa-lg' aria-hidden='true'/>
            </div>
        )
    }

    /***************************************************************************
     *
     **************************************************************************/

    goUp() {
        const animationTime = 1000;
        const framesCount = 50;
        const currentScroll = window.pageYOffset;

        this.props.onChangeTakeUp();

        let scroller = setInterval(() => {
            // считаем на сколько скроллить за 1 такт
            let scrollBy = Math.round(currentScroll / framesCount);

            // если к-во пикселей для скролла за 1 такт меньше расстояния до верха
            if(scrollBy < window.pageYOffset) {
                // то скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy(0, -scrollBy);
            } else {
                ::this.props.onChangeTakeUp();
                window.scrollTo(0, 0);
                clearInterval(scroller);
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
    }

}