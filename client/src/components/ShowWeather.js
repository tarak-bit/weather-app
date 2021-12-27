import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class ShowWeather extends Component{

    getDateFormat = (timeStamp) => {
        const date= new Date(timeStamp*1000)
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    renderNextDays = (data) => {
        
        return data.map((day,idx) => {
            return (
                <Fragment key={idx}>
                    <div >Date : {this.getDateFormat(day.dt)}</div>
                        <div>Humidity : {day.humidity}</div>
                        <div>pressure : {day.pressure}</div>
                    <div>Temperature : {(day.temp.day-273).toFixed(2)} C</div>
                    <hr/>
                </Fragment>
            )
        })
    }

    render(){
        const {weather} = this.props || {}
        
        return(
            <>
                <Link to='/'>Go Back</Link>
                {weather.loading ? <div>loading</div>: weather.error ? <div>{weather.error}</div> : 
                (
                    <Fragment>
                        <div>
                            <h3>Current weather</h3>
                            <div>Date : {this.getDateFormat(weather.weather.current.dt)}</div>
                            <div>Humidity : {weather.weather.current.humidity}</div>
                            <div>pressure : {weather.weather.current.pressure}</div>
                            <div>Temperature : {(weather.weather.current.temp-273).toFixed(2)} C</div>
                            <hr/>
                        </div>
                        <h3>Next 7 days</h3>
                        {this.renderNextDays(weather.weather.daily)}
                    </Fragment>
                )}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        weather:state.weather
    }
}

export default connect(mapStateToProps)(ShowWeather)

