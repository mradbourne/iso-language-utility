var x = require('x-ray')();
var R = require('ramda');

var processJson = function (data) {
  var filters = R.compose(
    R.propEq('type', 'Living'),
    R.propEq('type', 'Living')
  );
  var filteredData = R.filter(filters)(data);
  console.log(filteredData);
}

x('http://localhost:8000/data.html', 'table tr', [{
  name: 'td:nth-child(4)',
  scope: 'td:nth-child(5)',
  type: 'td:nth-child(6)',
  code_639_1: 'td:nth-child(1)',
  code_639_2: 'td:nth-child(2)',
  code_639_3: 'td:nth-child(3)'
}])(function(err, payload) {
  processJson(payload);
});
