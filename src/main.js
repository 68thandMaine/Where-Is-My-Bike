import { BikeIndex } from './bike-index.js';
import { buildBikeCards, buildBikeTypeChart } from './user-interface.js'
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
    let promise = bikeIndex.getBikes(location, distance);
    console.log(promise);

    promise.then(function(response) {
      let body = JSON.parse(response);
      buildBikeCards(body);
      buildBikeTypeChart(body, bikeIndex);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
