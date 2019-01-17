class BikeIndex {
  getBikes(location, distance) {
    const Promise = require('es6-promise').Promise;
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url = `https://bikeindex.org:443/api/v3/search?access_token=${process.env.API_KEY}&per_page=100&location=${location}&distance=${distance}&stolenness=all`;
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

  getPortlandBikes() {
    const Promise = require('es6-promise').Promise;
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url = `    https://bikeindex.org:443/api/v3/search?page=8&per_page=100&location=portland&distance=5&stolenness=stolen`;
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

  getBikeById(bikeId) {
    const Promise = require('es6-promise').Promise;
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url =`https://bikeindex.org:443/api/v3/bikes/${bikeId}`;
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

  stolenStatus(object) {
    return object.bikes.reduce(this.countStatus, {});
  }

  countStatus(counter, bike) {
    counter[bike.stolen] = (counter[bike.stolen] || 0) + 1;
    return counter;
  }

  countYears(counter, bike) {
    counter[bike.year] = (counter[bike.year] || 0) + 1;
    return counter;
  }

  getBikeYear(object) {
    return object.bikes.reduce(this.countYears, {});
  }

  weekday(object) {
    return object.bikes.reduce(this.countWeekdays,{});
  }

  countWeekdays(counter, bike) {
    bike.date_stolen = new Date(bike.date_stolen);
    console.log(bike.date_stolen);
    counter[bike.date_stolen.getDay()] = (counter[bike.date_stolen.getDay()] || 0) + 1;
    console.log(counter);
    return counter;
  }

}



export { BikeIndex };
