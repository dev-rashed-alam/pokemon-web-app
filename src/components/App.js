import React from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Layout from "./layout/Layout"
import "../assets/styles/App.css"
import Home from "./pages/Home";
import PokemonDetailsView from "./pages/PokemonDetailsView";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/details/:identifier">
                        <PokemonDetailsView/>
                    </Route>
                    <Route exact path="/404">
                        <p>404</p>
                    </Route>
                    <Route exact path="*">
                        <Redirect to="/404"/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
