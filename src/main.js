import { BikeIndex } from './bike-index.js';
import { buildBikeCards, buildBikeTypeChart, buildTotalBikeChart, buildBikeDetailCard, buildBikeYearChart, buildPortlandStolenStats, buildPortlandBikeYearChart, buildBikeByStolen } from './user-interface.js'
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js';

$(document).ready(function() {
  const bikeIndex = new BikeIndex();
  $('.userGraphCard').hide();

  let promise2 = bikeIndex.getTotalBikeCount();
  let promise4 = bikeIndex.getPortlandBikes();

  promise2.then(function(response) {
    let body = JSON.parse(response);
    buildTotalBikeChart(body, bikeIndex);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

  promise4.then(function(response) {
    let body = JSON.parse(response);
    console.log(body);
    buildPortlandStolenStats(body, bikeIndex);
    buildPortlandBikeYearChart(body, bikeIndex);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

  $("#output").on("click", "div", function(){
    let bikeId = $(this).attr("value");
    console.log(bikeId);
    let promise3 = bikeIndex.getBikeById(bikeId);
    promise3.then(function(response) {
      let card = JSON.parse(response);
      buildBikeDetailCard(card);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#detailCard').click(function(){
    $('#output').show();
    $('#detailCard').hide();
  });

  $('.searchForm').submit(function(event) {
    event.preventDefault();
    $('.userGraphCard').slideDown();

    let location = $('#location').val();
    $('#location').val("");
    let distance = parseInt($('#distance').val());
    $('#distance').val("");

    let promise1 = bikeIndex.getBikes(location, distance);

    promise1.then(function(response) {
      let body = JSON.parse(response);
      buildBikeCards(body);
      buildBikeTypeChart(body, bikeIndex);
      buildBikeByStolen(body, bikeIndex);
      buildBikeYearChart(body, bikeIndex);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
