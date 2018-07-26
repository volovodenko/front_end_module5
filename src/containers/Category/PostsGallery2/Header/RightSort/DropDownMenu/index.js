import React, {Component, Fragment} from 'react';

import './dropDownMenu.scss';


export default class DropDownMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropDownMenuVisible: false,
        };

        this.handleClickOutside = ::this.handleClickOutside;

    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }


    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }


    render() {
        return (
            <Fragment>
                <div className='headGallery-rightSort_dropDown'
                     onClick={::this.dropDownToggle}
                     ref={item => this.dropDownRef = item}
                >
                    {this.props.rightSortBy}
                    <i className='fa fa-caret-down' aria-hidden='true'/>
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
            <ul className='headGallery-rightSort_dropDownMenu'>
                <li onClick={::this.setSortByPopular}
                    className={this.props.rightSortBy === 'popular' ? 'active' : null}
                >
                    popular
                </li>
                <li onClick={::this.setSortByNewest}
                    className={this.props.rightSortBy === 'newest' ? 'active' : null}
                >
                    newest
                </li>
                <li onClick={::this.setSortByBest}
                    className={this.props.rightSortBy === 'best' ? 'active' : null}
                >
                    best
                </li>

            </ul>
        )
    }

    setSortByNewest() {
        this.dropDownToggle();

        if (this.state.rightSortBy !== 'newest') {
            this.props.onSetRightSort('newest');
        }
    }

    setSortByPopular() {
        this.dropDownToggle();

        if (this.state.rightSortBy !== 'popular') {
            this.props.onSetRightSort('popular');
        }
    }

    setSortByBest() {
        this.dropDownToggle();

        if (this.state.rightSortBy !== 'best') {
            this.props.onSetRightSort('best');
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