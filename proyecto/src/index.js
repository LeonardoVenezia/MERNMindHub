import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import CitiesPage from './CitiesPage'
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Notfound from './notFound'
import Ejemplo from './ejemploRedux/componente';
import store from './Store/store';

// Redux
// import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// Reducer Redux
// import rootReducer from "./store/reducers/rootReducer";

const Routing = (
<Router>
    <div>
        {/* <ul>
            <li>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="/CitiesPage">CitiesPage</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="/CreateAccount">CreateAccount</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="/Login">Login</NavLink>
            </li>
        </ul> */}
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/CitiesPage/:id" component={CitiesPage} />
            <Route path="/CreateAccount" component={CreateAccount} />
            <Route path="/Login" component={Login} />
            {/* <Route component={Notfound} /> */}
            <Route path="/Ejemplo" component={Ejemplo}/>
        </Switch>
    </div>
</Router>

)
ReactDOM.render(
    <Provider store={store}>
        {Routing}
    </Provider>
    , document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
