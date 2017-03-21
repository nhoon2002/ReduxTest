import React, { Component } from 'react';



class Home extends Component {
	render() {
		return (
        <div className="container">
        <div className="jumbotron">
				<img id="logo" src="http://placehold.it/800x400?text=Main+Background" />
				<button className="btn btn-primary loginButton">Sign In</button>
				<button className="btn btn-primary registerButton">Register</button>

        </div>

        </div>

    );
  };
}

export default Home;
