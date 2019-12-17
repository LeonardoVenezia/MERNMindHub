import {createStore} from 'redux';
import reducerEjemplo from '../reducers/reducerEjemplo'
const store=createStore(reducerEjemplo);
export default store;