/* jshint expr:true */
import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule( 'route:projects/project-id', 'ProjectsProjectIdRoute', function() {

  it('exists', function() {
    var route = this.subject();
    expect(route).to.be.ok;
  });

});
