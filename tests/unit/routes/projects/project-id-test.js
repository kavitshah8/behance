/* jshint expr:true */
import { expect } from 'chai';
// import { sinon } from 'sinon';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'route:projects/project-id',
  'ProjectsProjectIdRoute',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    it('exists', function() {
      var route = this.subject();
      expect(route).to.be.ok;
    });

    it('first-mock', function() {
    	var mock = sinon.mock();
    });
  }
);
