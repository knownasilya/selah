import addUserToSession from 'selah/utils/add-user-to-session';

module('addUserToSession');

var store = {
  getById: function (id) {
    return {
      get: function () {
        return []; 
      }
    };
  }
};

// Replace this with your real tests.
test('it works', function() {
  var result = addUserToSession(store, {}, 1);
  ok(result);
});
