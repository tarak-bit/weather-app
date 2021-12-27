import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './HomeScreen';
import ShowWeather from './ShowWeather'


const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path="/weather" component={ShowWeather} />
            </Switch>
        </Router>
    )
}

export default App