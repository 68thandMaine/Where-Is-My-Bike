class BikeIndex {
  getBikes(location, distance) {
    const Promise = require('es6-promise').Promise;
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url = `https://bikeindex.org:443/api/v3/search?access_token=${process.env.API_KEY}&location=${location}&distance=${distance}&stolenness=proximity`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  bikeTypes(object) {
    return object.bikes.reduce(this.countTypes, {});
  }

  countTypes(counter, bike) {
    counter[bike.manufacturer_name] = (counter[bike.manufacturer_name] || 0) + 1;
    return counter;
  }

  getTotalBikeCount() {
    const Promise = require('es6-promise').Promise;
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url = `https://bikeindex.org:443/api/v3/search/count?stolenness=stolen&access_token=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export { BikeIndex };
