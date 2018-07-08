import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

export const HeaderWeb = () => (
    <div className={'App'}>
        <header className={'App-header'}>
            <img src={logo} className={'App-logo'} alt={'logo'}/>
            <h1 className={'App-title'}>Detox Music</h1>
        </header>
    </div>
)