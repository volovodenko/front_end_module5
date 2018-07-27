import React, {Component} from 'react';

import Header from './Header';
import Image from './Image';

import './content.scss';

export default class Content extends Component {

    render() {
        return (
            <div className='post-content'>
                <Header {...this.props}/>
                <Image {...this.props}/>
            </div>

        )
    }

    /***************************************************************************
     *
     **************************************************************************/

}