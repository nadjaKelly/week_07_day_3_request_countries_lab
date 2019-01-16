const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Countries = function() {
  this.text = null;
};


Countries.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    // console.dir(this.text);
    PubSub.publish('Countries:allCountriesData', this.text);
  });
};

module.exports = Countries;
