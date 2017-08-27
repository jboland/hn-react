var $ = require('jquery');
var NewsList = require('./NewsList');
var React = require('react');
var ReactDOM = require('react-dom');

$.ajax({
  url: '/json/items.json'
}).then(function (items) {
  // Log the data so we can inspect it in the developer console.
  console.log('items', items);
  // Use a fake rank for now.
  ReactDOM.render(<NewsList items={items}/>, $('#content')[0]);
});
