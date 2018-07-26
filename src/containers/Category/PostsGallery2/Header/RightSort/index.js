import React, {Component} from 'react';

import './rightSort.scss';
import Play from './Play';
import DropDownMenu from './DropDownMenu';


export default class RightSort extends Component {
    render() {
        return (
            <div className='headGallery-rightSort'>
                <DropDownMenu {...this.props}/>
                <Play {...this.props}/>
            </div>

        )
    }

    /***************************************************************************
     *
     **************************************************************************/


}