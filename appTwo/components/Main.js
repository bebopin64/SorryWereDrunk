var React = require("react");
var router = require("react-router");
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;

var Results = require("./Children/Results");
var Saved = require("./Children/Saved");

var helpers = require("../utilities/helpers.js");

var Main = React.createClass({
	getInitialState: function() {
		return {
			searchTerm: "",
			startYear: "",
			endYear: ""
		}
	},
	handleChange: function(event) {
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
	handleClick: function() {
		helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear)
		.then(function(data) {
			this.setState({results0: data[0][0]});
			this.setState({results1: data[1][0]});
			this.setState({results2: data[2][0]});
			this.setState({results3: data[3][0]});
			this.setState({results4: data[4][0]});
			this.setState({url0: data[0][1]});
			this.setState({url1: data[1][1]});
			this.setState({url2: data[2][1]});
			this.setState({url3: data[3][1]});
			this.setState({url4: data[4][1]});
			this.setState({date0: data[0][2]});
			this.setState({date1: data[1][2]});
			this.setState({date2: data[2][2]});
			this.setState({date3: data[3][2]});
			this.setState({date4: data[4][2]});
		}.bind(this))
	},
	render: function() {
		return(
			<div className="container">
				<div className="row">
					<div className="jumbotron text-center">
						<h2>New York Times React - Article  Search & Save</h2>
					</div>
					<div className="row">
                              <div className="col-md-12">
                                   <div className="panel panel-default">
                                        <div className="panel-heading">
                                             <h3 className="panel-title text-center">Search</h3>
                                        </div>
                                        <div className="panel-body">
                                        <form>
                                             <div className="form-group">
                                                  <h4 className="text-center"><strong>Search Term</strong></h4>
                                                  <input 
                                                  	type="text" 
                                                  	className="form-control text-center" 
                                                  	id="searchTerm" 
                                                  	onChange= {this.handleChange} 
                                                  required/>
                                                  <br />
                                                  <h4 className="text-center"><strong>Start Date</strong></h4>
                                                  <input 
                                                  	type="text" 
                                                  	className="form-control text-center" 
                                                  	id="startYear" 
                                                  	placeholder="YYYYMMDD"
                                                  	onChange= {this.handleChange} 
                                                  required/>
                                                  <br />
                                                  <h4 className="text-center"><strong>End Date</strong></h4>
                                                  <input 
                                                  	type="text" 
                                                  	className="form-control text-center" 
                                                  	id="endYear" 
                                                  	placeholder="YYYYMMDD"
                                                  	onChange= {this.handleChange} 
                                                  required/>
                                                  <br />
                                                  <button 
                                                  	type="button" 
                                                  	className="btn btn-primary btn-block text-center" 
                                                  	onClick={this.handleClick}
                                                  >Search</button>
                                             </div>
                                        </form>
                                        </div>
                                   </div>
                              </div>
					</div>
					<div className="row">
                              <Results 
                              	results0={this.state.results0} 
                              	results1={this.state.results1} 
                              	results2={this.state.results2} 
                              	results3={this.state.results3} 
                              	results4={this.state.results4} 
                              	url0={this.state.url0} 
                              	url1={this.state.url1} 
                              	url2={this.state.url2} 
                              	url3={this.state.url3} 
                              	url4={this.state.url4}
                              	date0={this.state.date0}
                              	date1={this.state.date1}
                              	date2={this.state.date2}
                              	date3={this.state.date3}
                              	date4={this.state.date4}
                              />

					</div>
				</div>
			</div>
		)
	}
});

module.exports = Main;