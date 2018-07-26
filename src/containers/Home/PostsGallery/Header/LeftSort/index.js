import React, {Component} from 'react';

import './leftSort.scss';

export default class LeftSort extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropDownMenuVisible: false,
        };

        document.addEventListener('click', ::this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', ::this.handleClickOutside, false);
    }

    render() {
        return (
            <div className='headGallery-leftSort'>
                <div className='headGallery-leftSort_dropDown'
                     onClick={::this.dropDownToggle}
                     ref={item => this.dropDownRef = item}
                >
                    {this.props.leftSortBy}
                    <i className='fa fa-caret-down' aria-hidden='true'/>
                </div>
                {this.state.dropDownMenuVisible ? this.renderDropDownMenu() : null}
            </div>

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
            <ul className='headGallery-leftSort_dropDownMenu' ref={item => this.dropDownMenuRef = item}>
                <li onClick={::this.setSortByViral}
                    className={this.props.leftSortBy === 'most viral' ? 'active' : null}
                >
                    most viral
                </li>
                <li onClick={::this.setSortByUser}
                    className={this.props.leftSortBy === 'user submitted' ? 'active' : null}
                >
                    user submitted
                </li>
            </ul>
        )
    }

    setSortByViral() {
        this.dropDownToggle();

        if (this.state.leftSortBy !== 'most viral') {
            this.props.onSetLeftSort('most viral');

            if (this.state.rightSortBy !== 'newest') {
                this.props.onSetRightSort('newest');
            }
        }
    }

    setSortByUser() {
        this.dropDownToggle();

        if (this.state.leftSortBy !== 'user submitted') {
            this.props.onSetLeftSort('user submitted');

            if (this.state.rightSortBy !== 'newest') {
                this.props.onSetRightSort('newest');
            }
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