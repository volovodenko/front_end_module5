import React, {Component, Fragment} from 'react';

import './dropDownMenu.scss';


export default class DropDownMenu extends Component {
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
                <li onClick={::this.setSortByNewest}
                    className={this.props.rightSortBy === 'newest' ? 'active' : null}
                >
                    newest
                </li>
                <li onClick={::this.setSortByPopular}
                    className={this.props.rightSortBy === 'popular' ? 'active' : null}
                >
                    popular
                </li>

                {
                    this.props.leftSortBy === 'most viral'
                        ?
                        <li onClick={::this.setSortByRandom}
                            className={this.props.rightSortBy === 'random' ? 'active' : null}
                        >
                            random
                        </li>
                        :
                        <li onClick={::this.setSortByRising}
                            className={this.props.rightSortBy === 'rising' ? 'active' : null}
                        >
                            rising
                        </li>
                }

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

    setSortByRandom() {
        this.dropDownToggle();

        if (this.state.rightSortBy !== 'random') {
            this.props.onSetRightSort('random');
        }
    }

    setSortByRising() {
        this.dropDownToggle();

        if (this.state.rightSortBy !== 'rising') {
            this.props.onSetRightSort('rising');
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