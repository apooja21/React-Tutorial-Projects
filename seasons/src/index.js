import React from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";
import SeasonDisplay from "./SeasonDisplay";

//React says we have to define render!!
class App extends React.Component {
    /*  constructor(props) {
         super(props);
 
         this.state = { lat: null, errorMessage: '' };
 
 
     } */


    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div><h1>Error: {this.state.errorMessage}</h1></div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Loader message="Please accept location request" />
    }

    render() {
        return this.renderContent();

    }
}

ReactDOM.render(<App />, document.querySelector('#root'))