// Создание хранилища с передачей редьюсера и начального состояния Redux store
//описывается что для Redux store редюсером будет 'rootReducer'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //можна асинхронно диспатчити функції
import { composeWithDevTools } from 'redux-devtools-extension'; //для роботи redux devtools в хромі
import rootReducer from './rootReducer';

export default function configStore() {
    const devMode = process.env.NODE_ENV === 'development';


    const store = createStore(
        rootReducer,

        //for enable Redux DevTools Extension
        devMode ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
    );

    return store;
}