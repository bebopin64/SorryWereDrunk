var React = require("react");
var Axios = require("axios");

var Saved = require("./Saved");

var buttonStyle = {
	borderRadius: "5px",
	backgroundColor: "lightblue",
	color: "white",
	fontSize: "25px"
}

var Results = React.createClass({
	getInitialState: function() {
		return {
			title: "",
			url: ""
		}
	},
	saveArticle: function(event) {
		var targetTitle = event.currentTarget.dataset.title;
		var targetURL = event.currentTarget.dataset.url;
		this.setState({title: targetTitle});
		this.setState({url: targetURL});
		Axios.post("/api", {title: targetTitle, url: targetURL})
		.then(function() {
			console.log("successfully saved to database");
		})
		Axios.get("/api").then(function(results) {
			this.setState({title0: results.data[0].title});
			this.setState({title1: results.data[1].title});
			this.setState({title2: results.data[2].title});
			this.setState({title3: results.data[3].title});
			this.setState({title4: results.data[4].title});
			this.setState({url0: results.data[0].url});
			this.setState({url1: results.data[1].url});
			this.setState({url2: results.data[2].url});
			this.setState({url3: results.data[3].url});
			this.setState({url4: results.data[4].url});
			this.setState({date0: results.data[0].date});
			this.setState({date1: results.data[1].date});
			this.setState({date2: results.data[2].date});
			this.setState({date3: results.data[3].date});
			this.setState({date4: results.data[4].date});
		}.bind(this))
	},
	render: function() {
		return(
                <div className="col-lg-12">
          			<div className="panel panel-default">
          				<div className="panel-heading">
          					<h3 className="panel-title text-center">Results</h3>
          				</div>
          				<div className="panel-body text-left">
          					<a 
          						href={this.props.url0} 
          						target="_blank" 
          					>{this.props.results0}</a>

          					<br />
          					<br />

          					<button 
                                className="btn btn-primary text-center"  
          						type="button" 
          						onClick={this.saveArticle} 
          						data-url={this.props.url0} 
          						data-title={this.props.results0}
          					>Save</button>
                           
                            <hr />

                            <a 
                            	href={this.props.url1} 
                            	target="_blank" 
                            >{this.props.results1}</a>

                            <br />
                            <br />

                            <button 
                                className="btn btn-primary text-center"  
                            	type="button" 
                            	onClick={this.saveArticle} 
                            	data-url={this.props.url1} 
                            	data-title={this.props.results1}
                            >Save</button>
                           
                            <hr />
                            
                            <a 
                            	href={this.props.url2} 
                            	target="_blank" 
                            >{this.props.results2}</a>

                            <br />
                            <br />

                            <button 
                                className="btn btn-primary text-center"  
                            	type="button" 
                            	onClick={this.saveArticle} 
                            	data-url={this.props.url2} 
                            	data-title={this.props.results2}
                            >Save</button>
                           
                            <hr />

                            <a 
                            	href={this.props.url3} 
                            	target="_blank" 
                            >{this.props.results3}</a>

                            <br />
                            <br />

                            <button 
                                className="btn btn-primary text-center"  
                            	type="button" 
                            	onClick={this.saveArticle} 
                            	data-url={this.props.url3} 
                            	data-title={this.props.results3}
                            >Save</button>
                           
                            <hr />                            

                            <a 
                            	href={this.props.url4} 
                            	target="_blank" 
                            >{this.props.results4}</a>

                            <br />
                            <br />

                            <button 
                                className="btn btn-primary text-center"  
                            	type="button" 
                            	onClick={this.saveArticle} 
                            	data-url={this.props.url4} 
                            	data-title={this.props.results4}
                            >Save</button>
          				</div>
          			</div>

                    <div className="row">
                         <Saved 
                         	title0={this.state.title0} 
                         	title1={this.state.title1} 
                         	title2={this.state.title2}
                         	title3={this.state.title3}
                         	title4={this.state.title4}
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
		)
	}
});

module.exports = Results;