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
      // request.setRequestHeader("Accept", "application/json");
      request.send();
    });
  }
}

export { BikeIndex };
