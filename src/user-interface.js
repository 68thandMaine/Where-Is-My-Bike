import $ from 'jquery';
import { BikeIndex } from './bike-index.js';
import Chart from 'chart.js';

export function buildBikeCards(body) {
  let summary = "";
  for (let i = 0; i < body.bikes.length; i++) {
    summary += `<div class="bike"><p>Id: ${body.bikes[i].id}<p/><p>Title: ${body.bikes[i].title}<p/></div>`
  }
  $('#output').append(summary);
}

export function buildBikeTypeChart(body, bikeIndex) {
  let bikeTypes = bikeIndex.bikeTypes(body);
  let label = Object.getOwnPropertyNames(bikeTypes);
  let data = Object.values(bikeTypes);
  const ctx = document.getElementById('chart-area').getContext('2d');

  let colors = [];
  for (let i = 0; i < data.length; i++) {
    let number1 = Math.floor(Math.random()*255 +1);
    let number2 = Math.floor(Math.random()*255 +1);
    let number3 = Math.floor(Math.random()*255 +1);
    colors.push(`rgba(${number1}, ${number2}, ${number3}, 0.9)`);
  }
  console.log(colors);

  const config = {
    type: 'pie',
    data: {
      datasets: [{
        data: data,
        backgroundColor: colors,
        label: 'Bikes'
      }],
      labels: label
    },
    options: {
      responsive: true
    }
  };
  window.myPie = new Chart(ctx, config);
}

export function buildTotalBikeChart(body, bikeIndex) {
  let label = Object.getOwnPropertyNames(body);
  let data = Object.values(body);
  const ctx = document.getElementById('chart-area2').getContext('2d');

  let colors = [];
  for (let i = 0; i < data.length; i++) {
    let number1 = Math.floor(Math.random()*255 +1);
    let number2 = Math.floor(Math.random()*255 +1);
    let number3 = Math.floor(Math.random()*255 +1);
    colors.push(`rgba(${number1}, ${number2}, ${number3}, 0.9)`);
  }
  console.log(colors);

  const config = {
    type: 'pie',
    data: {
      datasets: [{
        data: data,
        backgroundColor: colors,
        label: 'Bikes'
      }],
      labels: label
    },
    options: {
      responsive: true
    }
  };
  window.myPie = new Chart(ctx, config);
}
