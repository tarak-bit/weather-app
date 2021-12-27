import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchWeather} from '../actions/weatherAction'

class SearchByLat extends Component {
    state = {lat:'', lon:''}

    onInputChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        const {lat, lon} = this.state
        this.props.fetchWeather(null,lat,lon)
        this.props.history.push('./weather')
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input placeholder='Latitude' required type='text' name='lat' value={this.state.lat} onChange={this.onInputChange}/>
                <input placeholder='Latitude' required type='text' name='lon' value={this.state.lon} onChange={this.onInputChange}/>
                <button>Search by Lat</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {weather:state.weather}
}

export default connect(mapStateToProps, {fetchWeather})(withRouter(SearchByLat))