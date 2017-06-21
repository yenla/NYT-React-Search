import React, { Component } from "react";
import ReactDOM from "react-dom";
import Search from "./Search"

export default class MainHeader extends Component {
	render() {
		return (
			<div className="container">
		        <nav className="navbar navbar-default" role="navigation">
		          <div className="container-fluid">
		            
		            <div className="navbar-header">
		              <a className="navbar-brand" href="#">NYT-React-Search</a>
		            </div>
		            
		            <div className="collapse navbar-collapse navbar-ex1-collapse">
		              <ul className="nav navbar-nav navbar-right">
		                <li><a href="#/search">Search</a></li>
		                <li><a href="#/saved">Saved Articles</a></li>
		              </ul>
		            </div>
		          </div>
		        </nav>
		        
		        <div className="jumbotron">
		          <h2 className="text-center"><strong><i className="fa fa-newspaper-o fa-lg"></i> New York Times Article Scrubber</strong></h2>
		          <h3 className="text-center">Search and save your favorite articles.</h3>
		        </div>

		        <Search />
		        {/*{this.props.children}*/}

		    </div>
		)

	}
};

// export default MainHeader;


