import $ from 'jquery';
import { BikeIndex } from './bike-index.js';
import Chart from 'chart.js';

export function buildBikeCards(body) {
  let summary = "";
  for (let i = 0; i < body.bikes.length; i++) {
    summary += `<div class="bike" value="${body.bikes[i].id}"><h3> ${body.bikes[i].title}</h3><p><strong>Manufacturer Name:<strong> ${body.bikes[i].manufacturer_name}<br><strong>Year:<strong> ${body.bikes[i].year}<br><strong>Frame Colors:</strong> ${body.bikes[i].frame_colors.join(", ")}<br><strong>Stolen:</strong> ${body.bikes[i].stolen}</p></div>`
  }
  $('#output').append(summary);
}

export function buildPortlandStolenStats(body, bikeIndex) {
  let bikeTypes = bikeIndex.bikeTypes(body);
  let label = Object.getOwnPropertyNames(bikeTypes);
  let data = Object.values(bikeTypes);
  console.log(data);
  const ctx = document.getElementById('chart-area4').getContext('2d');

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
      legend: false,
      responsive: true
    }
  };
  window.myPie = new Chart(ctx, config);
}

export function buildBikeTypeChart(body, bikeIndex) {
  let bikeTypes = bikeIndex.bikeTypes(body);
  let label = Object.getOwnPropertyNames(bikeTypes);
  let data = Object.values(bikeTypes);
  console.log(data);
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
      legend: false,
      responsive: true
    }
  };
  window.myPie = new Chart(ctx, config);
}

export function buildBikeByStolen(body, bikeIndex) {
  let bikeTypes = bikeIndex.stolenStatus(body);

  let label = Object.getOwnPropertyNames(bikeTypes);
  let data = Object.values(bikeTypes);
  console.log(data);
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
      legend: false,
      responsive: true
    }
  };
  window.myPie = new Chart(ctx, config);
}

export function buildTotalBikeChart(body, bikeIndex) {

  let label = Object.getOwnPropertyNames(body);
  let data = Object.values(body);
  const ctx = document.getElementById('chart-area5').getContext('2d');

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
      legend: false,
      responsive: true
    }
  };
  window.myPie = new Chart(ctx, config);
}

export function buildPortlandBikeYearChart(body, bikeIndex) {
  let bikeYear = bikeIndex.getBikeYear(body);
  let label = Object.getOwnPropertyNames(bikeYear);
  let data = Object.values(bikeYear);
  const ctx = document.getElementById('chart-area6').getContext('2d');


  const config = {
    type: 'line',
    data: {
      datasets: [{
        data: data,
        label: 'Prevalence of Bike Manufacture Years Stolen'
      }],
      labels: label
    },
    options: {
      responsive: true
    }
  };
  window.myLine = new Chart(ctx, config);
}

export function buildBikeYearChart(body, bikeIndex) {
  let bikeYear = bikeIndex.getBikeYear(body);
  let label = Object.getOwnPropertyNames(bikeYear);
  let data = Object.values(bikeYear);
  const ctx = document.getElementById('chart-area3').getContext('2d');


  const config = {
    type: 'line',
    data: {
      datasets: [{
        data: data,
        label: 'Prevalence of Bike Manufacture Years Stolen'
      }],
      labels: label
    },
    options: {
      responsive: true
    }
  };
  window.myLine = new Chart(ctx, config);
}

export function buildBikeDetailCard(card) {
  $('#output').hide();
  $("#detailCard").show();
  let detailCard =
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${card.bike.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${card.bike.manufacturer_name}</h6>
    <p class="card-text">Year: ${card.bike.year} </p>
    <p class="card-text">Frame colors: ${card.bike.frame_colors}</p>
    <p class="card-text">Stolen: ${card.bike.stolen} </p>
    <p class="card-text">Location Stolen: ${card.bike.stolen_locatoin}</p>
    <p class="card-text">Type of Bike: ${card.bike.type_of_cycle}</p>
    <p class="card=text">Theft Description: ${card.bike.stolen_record.theft_description}</p>
    </div>
    </div>`
  $('#detailCard').html(detailCard);
}
