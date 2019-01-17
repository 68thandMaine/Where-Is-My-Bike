import { BikeIndex } from './bike-index.js';
import { buildBikeCards, buildBikeTypeChart, buildTotalBikeChart, buildBikeDetailCard, buildBikeYearChart, buildPortlandStolenWeekdayChart } from './user-interface.js'
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js';

$(document).ready(function() {
  const bikeIndex = new BikeIndex();
  $('.userGraphs').hide();

  let promise4 = bikeIndex.getPortlandBikes();

  promise4.then(function(response) {
    let body = JSON.parse(response);
    console.log(body);
    buildPortlandStolenWeekdayChart(body, bikeIndex);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

  $("#output").on("click", "div", function(){
    let bikeId =$(this).attr("value");
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
    $('.userGraphs').slideDown();

    let location = $('#location').val();
    $('#location').val("");
    let distance = parseInt($('#distance').val());
    $('#distance').val("");

    let promise1 = bikeIndex.getBikes(location, distance);
    let promise2 = bikeIndex.getTotalBikeCount();
    console.log(promise1);
    console.log(promise2);

    promise1.then(function(response) {
      let body = JSON.parse(response);
      buildBikeCards(body);
      buildBikeTypeChart(body, bikeIndex);
      buildBikeYearChart(body, bikeIndex);
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
