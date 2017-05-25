var Axios = require("axios");
var key = "476e08a908344b8fa48ce0ae2efbe1a6";

var helpers = {
	runQuery: function(searchTerm, startYear, endYear) {
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
		+key+
		"&q="
		+searchTerm+
		"&begin_date="
		+startYear+
		"&end_date="
		+endYear;

		return Axios.get(queryURL).then(function(response) {
			var res = response.data.response.docs;
			var data = [[],[],[],[],[]];
			for (var i=0;i<5;i++) {
				data[i].push(res[i].headline.main);
				data[i].push(res[i].web_url);
				data[i].push(res[i].pub_date);
			}
			return data;
		});
	}
};

module.exports = helpers;