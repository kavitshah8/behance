import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

	model( parmas ) {

		var clientID = 'Kb9HmPuJsBPrytGERNjNZLjah7xuegFp';
		var url = "https://api.behance.net/v2/projects/"+ parmas.id +"?api_key="+ clientID;

		return this.projectID = ajax({url:url, type:'GET', dataType: "jsonp"}).then(function(res){
			return res.project;
    });
	
	},

});
