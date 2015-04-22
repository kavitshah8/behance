import Ember from 'ember';
// import ajax from 'ic-ajax';

export default Ember.Route.extend({

	// Passing item.id in {{#link-to}} invokes model hook
	// model: function (parmas) {
	// 	var clientID = 'Kb9HmPuJsBPrytGERNjNZLjah7xuegFp';
	// 	var url = "https://api.behance.net/v2/projects/"+ parmas.id +"?api_key="+ clientID;
	// 	debugger;
	// 	return ajax({url:url, type:'GET', dataType: "jsonp"}).then(function(res){
	// 		return res.project;
 //    });
	// },

	// Passing either item or item.id in {{#link-to}} invokes setupController hook
	setupController: function (controller, model) {
		this._super(controller, model);
	},

});
