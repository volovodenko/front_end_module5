import React, {Component} from 'react';


import './postsGallery.scss';
import Posts2 from './Posts';
import Header2 from './Header';


export default class PostsGallery2 extends Component {

    numberCardsInRow; //number tags card in row for current screen resolution
    homeGalleryList;
    lastScroll;

    constructor(props) {
        super(props);

        this.props.onSetRightSort('popular');

        this.rightSortBy = 'popular';
        this.page = 0;

        this.state = {
            numberCardRows: 5,
        };

        this.props.onGetCategoryGalleryList(this.props.match.params.tag, 0);


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
        document.addEventListener('scroll', ::this.handleScroll, false);
        document.addEventListener('click', ::this.handleScroll, false);

        this._ismounted = true;
    }

    render() {
        if (!this.props.categoryGalleryLoaded) {
            return null;
        }

        this.categoryGalleryList = this.props.categoryGalleryList.slice();


        //обрезаем длину массива до необходимого значения
        this.categoryGalleryList.length = this.numberCardsInRow * this.state.numberCardRows;


        return (
            <section className='posts'>

                <Header2 {...this.props}/>
                <Posts2
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
                : 'top';


        if (this.props.categoryGalleryLoaded && !this.props.categoryGalleryIsLoading &&
            (this.props.categoryGalleryList.length - this.categoryGalleryList.length) < 100
            && !this.props.fetchFail
        ) {
            this.page++;

            this.props.onGetCategoryGalleryList(this.props.match.params.tag, this.page, sort); //получить следующую порцию данных
        }


        if (this.props.rightSortBy !== this.rightSortBy) { //если сменился rightSortBy
            this.rightSortBy = this.props.rightSortBy;
            this.page = 0;


            this.setState({
                numberCardRows: 5
            });

            this.props.onGetCategoryGalleryList(this.props.match.params.tag, this.page, sort); //получить новую порцию данных


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

            if (currentScroll > scrollHeight / 2
                && this.categoryGalleryList.length < this.props.categoryGalleryList.length
            ) {

                if (this._ismounted){
                    //добавляем 5 строк карточек
                    this.setState({
                        numberCardRows: this.state.numberCardRows + 2
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

        return this.categoryGalleryList.filter(item => {
            if (arrayOfId.indexOf(item.id) === -1) {
                arrayOfId.push(item.id);
                return true;
            }
            return false;
        });
    }


}