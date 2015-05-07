import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

	model(){
		
		var clientID = 'Kb9HmPuJsBPrytGERNjNZLjah7xuegFp';
		var query = 'motorcycle';
		var url = "https://api.behance.net/v2/projects?q="+ query +"&client_id="+ clientID;

		// if(this.projects){
		// 	return this.projects;
		// }
		
		return this.projects = ajax({url:url,type:'GET', dataType: "jsonp"}).then(function(res){	
			return res.projects;
    });	
	}

});
