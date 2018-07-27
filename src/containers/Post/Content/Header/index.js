import React, {Component} from 'react';

import './header.scss';

export default class Header extends Component {

    render() {
        const baseUrl = 'https://imgur.com';

        const title = this.props.albumInfoLoaded ? this.props.albumInfo.title : this.props.imageInfo.title;
        const account = this.props.albumInfoLoaded ? this.props.albumInfo.account_url : this.props.imageInfo.title;

        return (
            <div className='post-content_header'>
                <h1>{title}</h1>
                <p>
                    by
                    <a href={`${baseUrl}/user/${account}`}>
                        {account}
                    </a>
                </p>

            </div>

        )
    }

    /***************************************************************************
     *
     **************************************************************************/

}