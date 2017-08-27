const _ = require('lodash');
import NewsList from './NewsList';
import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
  .then((stories) => {
    console.log(stories);
    const detailDeferreds = _(stories.data.slice(0, 30)).map((itemId) => {
      return axios.get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json');
    }).value();

    axios.all(detailDeferreds)
      .then(axios.spread(function() {
        console.log('axios spread returning', arguments);
        let items = _(arguments).map(function(argument) {
          return argument.data;
        }).value()
        console.log('items are', items);
        ReactDOM.render(<NewsList items={items} />, document.getElementById('app'));        
      }));
  });