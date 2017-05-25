var React = require("react");

var Saved = React.createClass({
	render: function() {
		return(
               <div className="col-md-12">
                    <div className="panel panel-default">
                         <div className="panel-heading">
                              <h3 className="panel-title text-center">Saved</h3>
                         </div>
                         <div className="panel-body text-left">
                              <h4><a href={this.props.url0}>{this.props.title0}</a> - {this.props.date0}</h4>
                              <hr />
                              <h4><a href={this.props.url1}>{this.props.title1}</a> - {this.props.date1}</h4>
                              <hr />
                              <h4><a href={this.props.url2}>{this.props.title2}</a> - {this.props.date2}</h4>
                              <hr />
                              <h4><a href={this.props.url3}>{this.props.title3}</a> - {this.props.date3}</h4>
                              <hr />
                              <h4><a href={this.props.url4}>{this.props.title4}</a> - {this.props.date4}</h4>
                         </div>
                    </div>
               </div>
		)
	}
});

module.exports = Saved;