import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Search from './Search'
import SearchByLat from './SearchByLat'
import { fetchWeatherByIp } from '../actions/weatherAction'

class HomeScreen extends Component {

    getWeatherByIp = () => {
        this.props.fetchWeatherByIp()
        this.props.history.push('/weather')
    }

    render(){
        return (
            <Fragment>
                <Search />
                <h4>Search By lat and Lon</h4>
                <SearchByLat />
                <button onClick={this.getWeatherByIp}>Get By Ip</button>
            </Fragment>
        )
    }
}

export default connect(null, {fetchWeatherByIp})(HomeScreen)