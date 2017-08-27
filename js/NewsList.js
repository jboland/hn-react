var React = require('react');
var NewsHeader = require('./NewsHeader');
var NewsItem = require('./NewsItem');
var _ = require('lodash');

var NewsList = React.createClass({
  getMore: function() {
    return (
      <div className="newsList__more">
        <a href="https://news.ycombinator.com/news?p=2" className="newsList__moreLink">More</a>
      </div>
    );
  },
  render: function() {
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
});

module.exports = NewsList;