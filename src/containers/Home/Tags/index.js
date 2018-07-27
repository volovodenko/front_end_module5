import React, {Component} from 'react';

import './tags.scss';
import Tag from './Tag';
import Buttons from './Buttons';
import SortBy from './SortBy';


export default class Tags extends Component {

    galleryTagsList; //current tags list
    maxTagRows; //max number row of tags
    // numberTagsInRow; //number tags card in row for current screen resolution

    constructor(props) {
        super(props);

        const w = window.screen.availWidth;
        let numberTagsInRow = Math.ceil((w - 300) / 127);
        numberTagsInRow = numberTagsInRow > 8 ? 8 : numberTagsInRow;
        this.props.onsetNumberTagsInRow(numberTagsInRow);

    }

    render() {
        this.sortOperations();

        return (
            <section className='TrendingTags'>

                <div className='TrendingTags-header'>
                    <h3>explore tags</h3>
                    <SortBy {...this.props} />
                </div>

                <ul className='TrendingTags-container'>
                    <Tag galleryTagsList={this.galleryTagsList}/>
                </ul>

                <div className='TrendingTags-more'>
                    <Buttons
                        {...this.props}
                        maxTagRows={this.maxTagRows}
                        numTagsLeft={this.props.galleryTagsList.length - this.galleryTagsList.length}
                    />
                </div>

            </section>
        )
    }

    /***************************************************************************
     *
     **************************************************************************/

    sortOperations() {
        if (!this.maxTagRows) {
            this.maxTagRows = Math.ceil(this.props.galleryTagsList.length / this.props.numberTagsInRow);
        }

        if (this.props.sortTagsBy === 'posts') {
            this.sortByPosts();
        }

        if (this.props.sortTagsBy === 'followers') {
            this.sortByFollowers();
        }

        //обрезаем длину массива до необходимого значения
        this.galleryTagsList.length = this.props.numberTagsInRow * this.props.numberTagRows;
    }


    sortByPosts() {
        this.galleryTagsList = this.props.galleryTagsList.slice();
        this.galleryTagsList.sort((item1, item2) => item2.total_items - item1.total_items);
    }

    sortByFollowers() {
        this.galleryTagsList = this.props.galleryTagsList.slice();
        this.galleryTagsList.sort((item1, item2) => item2.followers - item1.followers);
    }

}