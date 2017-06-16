import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: "",
			startYear: "",
			endYear: "",
			results: [],
			savedArticles: []
		};
		this.setTerm({searchTerm: newTerm, startyear: newStartYear, endyear: newEndYear});
	}


};


