import React, {Component} from 'react';

import './header.scss';
import {BASE_URL_IMAGES} from '../../../config';



export default class Header extends Component {
    render() {
        const url = `${BASE_URL_IMAGES}/${this.props.categoryData.background_hash}.jpg`;
        const style = {backgroundImage: `url(${url})`};

        return (
            <div className='headCategory' style={style}>
                <h1>{this.props.categoryData.display_name}</h1>
                <p className='headCategory-description'>{this.props.categoryData.description}</p>
                <p className='headCategory-total-Items'>{this.props.categoryData.total_items} POSTS</p>
            </div>
        )
    }

    /***************************************************************************
     *
     **************************************************************************/


}