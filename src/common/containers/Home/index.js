import React from 'react';
import { FormattedMessage } from 'react-intl';

import logo from '../../assets/svg/react.svg';
import './Home.css';
import translationMessages from '../../translations';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="Home">
                <div className="Home-header">
                    <img src={logo} className="Home-logo" alt="logo" />
                    <h2>Welcome to Razzle</h2>
                </div>
                <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
                    <code>src/Home.js</code> and save to reload.
                </p>
                <ul className="Home-resources">
                    <li>
                        <a href="https://github.com/jaredpalmer/razzle"><FormattedMessage {...translationMessages.author} /> using Razzle</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
