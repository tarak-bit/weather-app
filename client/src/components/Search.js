import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions/weatherAction'

class Search extends Component {
    state = {search:''}

    onInputChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.fetchWeather(this.state.search)
        this.props.history.push('./weather')
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input placeholder='Search by city' required type='text' name='search' value={this.state.search} onChange={this.onInputChange}/>
                <button>Search By city</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {weather:state.weather}
}

export default connect(mapStateToProps, {fetchWeather})(withRouter(Search))