import { BikeIndex } from './bike-index.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('.searchForm').submit(function(event) {
    event.preventDefault();
    let location = $('#location').val();
    console.log(location);
    $('#location').val("");
    let distance = parseInt($('#distance').val());
    console.log(distance);
    $('#distance').val("");

    let bikeIndex = new BikeIndex();
    let promise = bikeIndex.getBikes(location, distance);
    console.log(promise);
    promise.then(function(response) {
      let body = JSON.parse(response);
      let summary = "";
      for (let i = 0; i < body.bikes.length; i++) {
        summary += `<div class="bike"><p>Id: ${body.bikes[i].id}<p/><p>Title: ${body.bikes[i].title}<p/></div>`
      }
      $('#output').append(summary);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
