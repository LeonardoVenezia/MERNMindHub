import React from 'react';
import { Route, Link } from 'react-router-dom'
import CitiesApp from './CitiesApp/CitiesApp.js';

const User = ({ match }) => <p>{match.params.id}</p>

class CitiesPage extends React.Component {
    render(){
        const { url } = this.props.match
        return (
        <div>
            <h1>Users</h1>
            <strong>select a user</strong>
            <ul>
                <li>
                    <Link to="/CitiesPage/1">User 1 </Link>
                </li>
                <li>
                    <Link to="/CitiesPage/2">User 2 </Link>
                </li>
                <li>
                    <Link to="/CitiesPage/3">User 3 </Link>
                </li>
            </ul>
            <Route path="/CitiesPage/:id" component={User} />
            <CitiesApp></CitiesApp>
        </div>
        )
    } 
}

export default CitiesPage