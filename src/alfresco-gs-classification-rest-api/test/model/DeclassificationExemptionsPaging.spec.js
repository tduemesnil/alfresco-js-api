

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AlfrescoGovernanceServicesSecurityControls);
  }
}(this, function(expect, AlfrescoGovernanceServicesSecurityControls) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPaging();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeclassificationExemptionsPaging', function() {
    it('should create an instance of DeclassificationExemptionsPaging', function() {
      // uncomment below and update the code to test DeclassificationExemptionsPaging
      //var instane = new AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPaging();
      //expect(instance).to.be.a(AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPaging);
    });

    it('should have the property list (base name: "list")', function() {
      // uncomment below and update the code to test the property list
      //var instane = new AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPaging();
      //expect(instance).to.be();
    });

  });

}));
