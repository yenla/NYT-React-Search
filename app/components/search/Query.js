import React, { Component } from "react";

export default class Query extends Component {
	constructor(props){
		super(props);
		this.state = {
			search: "",
      		startYear: "",
      		endYear: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event){
		const newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);

		
		// this.setState({
		// 	"search": event.target.value
		// });
		// this.setState({
		// 	[event.target.id]: event.target.value
		// });


	}

	handleSubmit(event){
		console.log('ok');
		this.props.updateSearch(this.state.search, this.state.startYear, this.state.endYear);
		// return false;
	}

	render(){
		return(
			<div>
				<div className="row">
		            <div className="col-lg-12">

		              <div className="panel panel-primary">
		                <div className="panel-heading">
		                  <h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i> Search</strong></h1>
		                </div>
		                <div className="panel-body">

		                  <form>
		                    <div className="form-group">
		                      <h4 className=""><strong>Topic</strong></h4>
		                      <input type="text" value={this.state.value} className="form-control " id="search" onChange={this.handleChange} required/>

		                      <h4 className=""><strong>Start Year (YYYYMMDD - Required)</strong></h4>
		                      <input value={this.state.value} className="form-control " id="startYear" onChange={this.handleChange} required/>

		                      <h4 className=""><strong>End Year (YYYYMMDD - Required)</strong></h4>
		                      <input value={this.state.value} className="form-control " id="endYear" onChange={this.handleChange} required/>

		                    </div>

		                    <div className="pull-right">
		                      <button type="button" className="btn btn-primary" onClick={this.handleSubmit}><h4>Submit</h4></button>
		                    </div>
		                  </form>

		                </div>
		              </div>

		            </div>
		         </div>
			</div>
		)
	}

};