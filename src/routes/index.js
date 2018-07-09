import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { HeaderWeb } from '../components/HeaderWeb';
import { Home } from '../routes/Home/';
import { AudioPlayer } from '../routes/AudioPlayer'

const NoMatch = () => (
    <div style={{ textAlign: 'center' }}>
        <h2>No match found :(</h2>
    </div>
);

export const Root = () => (
    <Router>
        <React.Fragment>
            <HeaderWeb/>
            <div style={{ display:'flex', flex:1, alignItems:'center', justifyContent:'center', marginTop:10}}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/player`} component={AudioPlayer}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        </React.Fragment>
    </Router>
)