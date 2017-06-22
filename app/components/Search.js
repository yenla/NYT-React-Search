import React, { Component } from "react";
import axios from "axios";

import Query from "./search/Query";
import Results from "./search/Result";

import Helpers from "../utils/Helpers";


export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
			startYear: "",
			endYear: "",
			results: {}
			// savedArticles: []
		}

		this.setQuery = this.setQuery.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {

		if (this.state.searchTerm != "" && (prevState.searchTerm != this.state.searchTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear))
		{
			Helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear)
			.then(function(data) {
				if (data != this.state.results)
				{
					this.setState({
						result:data
					})
				}
			}.bind(this))

		}
	}

	setQuery(newTerm, newStartYear, newEndYear){
    var term = newTerm;
    var start = newStartYear;
    var end = newEndYear;
		this.setState({
			searchTerm: term,
			startYear: start,
			endYear: end
		})

		// console.log('query running');
		var data = Helpers.runQuery(newTerm, newStartYear, newEndYear);
	}

	render() {
		return (
			<div className="row">
		        <div className="col-lg-12">
		          <Query updateSearch={this.setQuery}/>
		        </div>

		        <div className="col-lg-12">
		          <Results results={this.state.results}/>
		        </div>
		    </div>
		)
	}

};


