import { BikeIndex } from './bike-index.js';
import { buildBikeCards, buildBikeTypeChart, buildTotalBikeChart } from './user-interface.js'
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js';

$(document).ready(function() {
  $('.searchForm').submit(function(event) {
    event.preventDefault();

    let location = $('#location').val();
    $('#location').val("");
    let distance = parseInt($('#distance').val());
    $('#distance').val("");

    let bikeIndex = new BikeIndex();
    let promise1 = bikeIndex.getBikes(location, distance);
    let promise2 = bikeIndex.getTotalBikeCount();
    console.log(promise1);
    console.log(promise2);

    promise1.then(function(response) {
      let body = JSON.parse(response);
      buildBikeCards(body);
      buildBikeTypeChart(body, bikeIndex);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

    promise2.then(function(response) {
      let body = JSON.parse(response);
      buildTotalBikeChart(body, bikeIndex);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
