import { Practice } from './practice.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  var practice = new Practice('Kristin');
  $('#output').append(`<p>${practice.name}</p>`);
});
