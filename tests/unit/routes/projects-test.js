/* jshint expr:true */
import { expect } from 'chai';
import { describeModule, it, visit } from 'ember-mocha';

describeModule( 'route:projects', 'ProjectsRoute', function() {

  it('exists', function() {
		var route = this.subject();
		expect(route).to.be.ok;
  });

  it('testing model hoook', function() {
		var route = this.subject();
		var mock = sinon.mock( route );
		mock.expects('model');

    route.model();
		mock.verify();
		mock.restore();
	});

});
