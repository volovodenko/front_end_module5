import React, {Component} from 'react';

import './play.scss';


export default class Play extends Component {
    constructor(props) {
        super(props);

        this.state = {
            viewTitleVisible: false,
        };

    }


    render() {
        return (
            <div className='headGallery-view'>
                {/*<i className='fa fa-play-circle-o fa-lg' aria-hidden='true'/>*/}
                <i onMouseEnter={::this.viewTitleToggle}
                   onMouseLeave={::this.viewTitleToggle}
                   onClick={::this.clickPlayToggle}
                   className={this.props.autoPlay
                       ? 'fa fa-pause-circle-o fa-lg'
                       : 'fa fa-play-circle-o fa-lg'
                   }
                   aria-hidden='true'/>

                {
                    this.state.viewTitleVisible ?
                        <div className='headGallery-view_title'>
                            {this.props.autoPlay ? 'Disable Autoplay' : 'Enable Autoplay'}
                        </div>
                        : null
                }


            </div>

        )
    }

    /***************************************************************************
     *
     **************************************************************************/

    viewTitleToggle() {
        this.setState(prevState => ({
            viewTitleVisible: !prevState.viewTitleVisible
        }));
    }

    clickPlayToggle() {
        this.props.onChangeAutoPlay();
    }


}