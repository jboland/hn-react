import React, { Component } from 'react';
import NewsHeader from './NewsHeader';
import NewsItem from './NewsItem';
const _ = require('lodash');

class NewsList extends Component {
  constructor() {
    super()
  }

  getMore () {
    return (
      <div className="newsList__more">
        <a href="https://news.ycombinator.com/news?p=2" className="newsList__moreLink">More</a>
      </div>
    );
  }

  render () {
    return (
      <div className="newsList">
        <NewsHeader />
        <div className="newsList__newsItems">
          {_(this.props.items).map(function(item, index) {
            return <NewsItem key={item.id} item={item} rank={index + 1} />;
          }.bind(this)).value()}
        </div>
        {this.getMore()}
      </div>
    );
  }
}

export default NewsList;