import React, {Component} from 'react';


import './postsGallery.scss';
import Posts from './Posts';
import Header from './Header';


export default class PostsGallery extends Component {

    numberCardsInRow; //number tags card in row for current screen resolution
    homeGalleryList;
    lastScroll;

    constructor(props) {
        super(props);

        this.leftSortBy = this.props.leftSortBy;
        this.rightSortBy = this.props.rightSortBy;
        this.page = 0;

        this.props.onGetHomeGalleryList(0);


        this.state = {
            numberCardRows: 5,
        };


        const w = window.screen.availWidth;
        const numberCardsInRow = Math.floor((w - 100) / 260);
        this.numberCardsInRow = numberCardsInRow > 4 ? 4 : numberCardsInRow;

        this.lastScroll = 0;

        this.handleScroll = ::this.handleScroll;




    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll, false);
        document.removeEventListener('click', this.handleScroll, false);
        this._ismounted = false;
    }

    componentDidUpdate() {
        this.getNewData();
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll, false);
        document.addEventListener('click', this.handleScroll, false);
        this._ismounted = true;
    }

    render() {
        if (!this.props.homeGalleryLoaded) {
            return null;
        }

        this.homeGalleryList = this.props.homeGalleryList.slice();


        //обрезаем длину массива до необходимого значения
        this.homeGalleryList.length = this.numberCardsInRow * this.state.numberCardRows;

        return (
            <section className='posts'>

                <Header {...this.props}/>
                <Posts
                    // numberCardRows={this.state.numberCardRows}
                       numberCardsInRow={this.numberCardsInRow}
                       filteredList={this.filteredList()}
                       {...this.props}
                />

            </section>
        )
    }

    /***************************************************************************
     *
     **************************************************************************/

    getNewData() {
        const sort = this.props.rightSortBy === 'newest'
            ? 'time'
            : this.props.rightSortBy === 'popular'
                ? 'viral'
                : this.props.rightSortBy === 'rising'
                    ? 'rising'
                    : 'random';


        const section = sort === 'random'
            ? 'random'
            : this.props.leftSortBy === 'most viral'
                ? 'hot'
                : 'user';

        if (this.props.homeGalleryLoaded && !this.props.homeGalleryIsLoading &&
            (this.props.homeGalleryList.length - this.homeGalleryList.length) < 100
            && !this.props.fetchFail
        ) {
            this.page++;

            this.props.onGetHomeGalleryList(this.page, section, sort); //получить следующую порцию данных
        }

        if (this.props.leftSortBy !== this.leftSortBy) { //если сменился leftSortBy
            this.leftSortBy = this.props.leftSortBy;
            this.page = 0;


            this.setState({
                numberCardRows: 5
            });

            this.props.onGetHomeGalleryList(this.page, section, sort); //получить новую порцию данных


        }

        if (this.props.rightSortBy !== this.rightSortBy) { //если сменился rightSortBy
            this.rightSortBy = this.props.rightSortBy;
            this.page = 0;

            this.setState({
                numberCardRows: 5
            });

            this.props.onGetHomeGalleryList(this.page, section, sort); //получить новую порцию данных


        }

    }

    handleScroll() {
        const currentScroll = window.pageYOffset;

        const deltaScroll = currentScroll - this.lastScroll;
        this.lastScroll = currentScroll;

        // const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;


        if (deltaScroll > 0) { //двигаемся вниз
            // (scrollHeight - currentScroll - clientHeight) < 300

            if (currentScroll > 800 && !this.props.takeUpVisible) {
                this.props.onChangeTakeUpVisible(true);
            }

            // (scrollHeight - currentScroll - clientHeight) < 300
            if (currentScroll > scrollHeight / 2
                && this.homeGalleryList.length < this.props.homeGalleryList.length
            ) {
                if (this._ismounted) {
                    //добавляем 5 строк карточек
                    this.setState({
                        numberCardRows: this.state.numberCardRows + 10
                    });
                }

            }
        } else { //двигаемся вверх

            if (currentScroll < 300 && this.props.takeUpVisible) {
                this.props.onChangeTakeUpVisible(false);
            }


        }

    }


    filteredList() {
        //фильтруем от одинаковых элементов
        const arrayOfId = [];

        return this.homeGalleryList.filter(item => {
            if (arrayOfId.indexOf(item.id) === -1) {
                arrayOfId.push(item.id);
                return true;
            }
            return false;
        });
    }


}