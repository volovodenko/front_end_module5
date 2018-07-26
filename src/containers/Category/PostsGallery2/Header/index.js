import React, {Component} from 'react';

import './header.scss';
import RightSort2 from './RightSort';
import LeftSort2 from './LeftSort';


export default class Header2 extends Component {
    render() {
        return (
            <div className='headGallery'>
                <LeftSort2 {...this.props}/>
                <RightSort2 {...this.props}/>
            </div>
        )
    }

    /***************************************************************************
     *
     **************************************************************************/


}