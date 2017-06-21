import React, { Component } from "react";
import Router from "react-router";

import Helpers from "../../utils/Helpers";

export default class Results extends Component {
	constructor(props){
		super(props);
		this.state = {
			title:"",
			url:"",
			pubDate:"",
		}
	}
	handleClick(item, event){
		Helpers.postSaved(item.headline.main, item.pub_date, item.web_url)
		.then(function(data){

		}.bind(this))
		
	}

	render(){
		if(!this.props.results.hasOwnProperty('docs')){
			return(

				<li className="list-group-item">
					<h3>
						<span><em>Search for Articles.</em></span>
					</h3>
				</li>
			)
		}

		else {
			const articles = this.props.results.docs.map(function(articles, index){
				return(
					<div key={index}>
						<li className="list-group-item">
							<h3>
								<span><em>{article.haedline.main}</em></span>
								<span className="btn-group pull-right">
									<a href={article.web_url} target="_blank"><button className="btn btn-default ">View Article</button></a>

                  					<button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>Save</button>
								</span>
							</h3>
							<p>Date Published: {article.pub_date}</p>
						</li>
					</div>
				)
			}.bind(this))
		}

		return(
			<div className ="main-container">
		        <div className="row">
		          <div className="col-lg-12">

		            <div className="panel panel-primary">
		              <div className="panel-heading">
		                <h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
		              </div>
		              <div className="panel-body">
		                <ul className="list-group">

		                  {articles}

		                </ul>
		              </div>
		            </div>

		          </div>
		        </div>
		    </div>
		)
	}

}