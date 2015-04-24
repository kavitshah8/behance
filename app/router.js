import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects', function() {
    this.route('project-id', { path:':id' });
  });

  this.route('home');
});

export default Router;
