import React, {Component, Fragment} from 'react';

import './sortBy.scss';

export default class SortBy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropDownMenuVisible: false
        };

        document.addEventListener('click', ::this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', ::this.handleClickOutside, false);
    }

    render() {
        return (
            <Fragment>
                <div className='TrendingTags-header_sort'>
                    <span>sort by:</span>
                    <div className='dropDown' onClick={::this.dropDownToggle} ref={item => this.dropDownRef = item}>
                        {this.props.sortTagsBy}
                        <i className='fa fa-caret-down' aria-hidden='true'/>
                    </div>
                </div>
                {this.state.dropDownMenuVisible ? this.renderDropDownMenu() : null}
            </Fragment>
        )
    }

    /***************************************************************************
     *
     **************************************************************************/

    dropDownToggle() {
        this.setState({
            dropDownMenuVisible: !this.state.dropDownMenuVisible,
        });
    }

    renderDropDownMenu() {
        return (
            <ul className='SortDropDown-menu' ref={item => this.dropDownMenuRef = item}>
                <li onClick={::this.setSortByPosts}
                    className={this.props.sortTagsBy === 'posts' ? 'active' : null}
                >
                    posts
                </li>
                <li onClick={::this.setSortByFollowers}
                    className={this.props.sortTagsBy === 'followers' ? 'active' : null}
                >
                    followers
                </li>
            </ul>
        )
    }

    setSortByPosts() {
        this.dropDownToggle();

        if (this.state.currentSortBy !== 'posts') {
            this.props.onSetSortTagsBy('posts');
        }
    }

    setSortByFollowers() {
        this.dropDownToggle();

        if (this.state.currentSortBy !== 'followers') {
            this.props.onSetSortTagsBy('followers');
        }

    }

    handleClickOutside(e) {
        if (!e.composedPath().includes(this.dropDownRef)
            && !e.composedPath().includes(this.dropDownMenuRef)
            && this.state.dropDownMenuVisible
        ) {
            this.dropDownToggle();
        }
    }
}