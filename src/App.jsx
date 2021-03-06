import React, {Component} from 'react';

import './App.scss';

import Header from "./components/Header/Header";
import Start from "./components/Start/Start";
import PoiAdvisor from "./components/PoiAdvisor/PoiAdvisor";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div className={"App"}>

                <img className={"back-img-1"} src={require('./assets/images/amsterdam-building.jpg')} alt="a tourist location"/>

                <Header/>

                <Start/>

                <PoiAdvisor/>

                <Footer/>

            </div>
        );
    }
}

export default App;
