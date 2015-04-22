/* jshint expr:true */
import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule( 'route:projects/project-id', 'ProjectsProjectIdRoute', function() {

  it('exists', function() {
    var route = this.subject();
    expect(route).to.be.ok;
  });

  it('testing setupController hook', function() {
  	var route = this.subject();
		var mock = sinon.mock( route );
  	mock.expects('setupController');
		route.setupController();
		mock.verify();
		mock.restore();
  });

});
