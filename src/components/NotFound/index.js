import React, {Component} from 'react';

import './notFound.scss';

export default class NotFound extends Component {

    render(){
        return (
            <p className='not-found'>Ошибка 404. Страница не найдена</p>
        );
    }
}