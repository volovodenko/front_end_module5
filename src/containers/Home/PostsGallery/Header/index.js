import React, {Component} from 'react';

import './header.scss';
import RightSort from './RightSort';
import LeftSort from './LeftSort';


export default class Header extends Component {
    render() {
        return (
            <div className='headGallery'>
                <LeftSort {...this.props}/>
                <RightSort {...this.props}/>
            </div>
        )
    }

    /***************************************************************************
     *
     **************************************************************************/


}