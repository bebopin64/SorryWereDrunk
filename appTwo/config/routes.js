var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var Main = require("../components/Main");

module.exports = (
	<Route path="/" component={Main} />
);