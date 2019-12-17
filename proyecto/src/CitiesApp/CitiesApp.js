import React from 'react';

class CitiesApp extends React.Component {
    constructor(props) {
        super(props)
        this.listaCiudades = []
        this.state = {
            isFetching: false,
            toFetch: true
        }
    }
    getCities = () => {
        // this.setState({...this.state, isFetching: true})
        fetch('http://localhost:5000/api/cities/all')
        .then(response => response.json())
        .then(result => this.setState(
            {
                ...this.state,
                citiesTotal: result.map((a)=> a.name),
                cities: result.map((a)=> a.name),
                isFetching: false,
                toFetch: false
            }))
        .catch(e => console.log(e));
    }

    isGetCities() {
        return this.state.toFetch ? this.getCities() : this.parseCites();
    }

    parseCites() {
        return (this.state.cities.map((city)=> {
            return <li key={city}>{city}</li>
        }))
    }

    componentDidMount() {
        this.setState(
            {
                ...this.state,
                buscador: document.getElementById("buscador")
            }
        )
    }

    handleChange() {
        this.setState({
            ...this.state,
            cities: this.state.citiesTotal.filter((a)=> a.indexOf(this.state.buscador.value) >= 0)
        })
    }

    render() {
        return (
            <div>
                <input
                    id="buscador"
                    type="text"
                    onChange={this.handleChange.bind(this)}>
                </input>
                <ul>{this.isGetCities()}</ul>
            </div>
        )
    }
}

export default CitiesApp