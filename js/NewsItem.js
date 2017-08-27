var $ = require('jquery');
var React = require('react');
var url = require('url');
var moment = require('moment');

var NewsItem = React.createClass({
  getDomain: function() {
    return url.parse(this.props.item.url).hostname;
  },
  getCommentLink: function() {
    var commentText = 'discuss';
    if (this.props.item.kids && this.props.item.kids.length > 0) {
      commentText = this.props.item.kids.length + ' comments';
    }
    return (
      <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>
        {commentText}
      </a>
    )
  },
  getSubtext: function() {
    return (
      <div className="newsItem__subtext">
        {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {moment.utc(this.props.item.time * 1000).fromNow()}  | {this.getCommentLink()}
      </div>
    )
  },
  getTitle: function() {
    return (
      <div className="newsItem__title">
        <a className="newsItem__titleLink" href={this.props.item.url}>{this.props.item.title}</a>
        <a className="newsItem__domain" href={'https://news.ycombinator.com/from?=' + this.getDomain()}>({this.getDomain()})</a>
      </div>
    )
  },
  getRank: function() {
    return (
      <div className="newsItem__rank">
        {this.props.rank}
      </div>
    )
  },
  getVote: function() {
    return (
      <div className="newsItem__vote">
        <a href={'https://news.ycombinator.com/vote?id=' + this.props.item.id + 'how=up&goto=news'}>
          <img src="../img/grayarrow2x.gif" width="10"/>
        </a>
      </div>
    )
  },
  render: function () {
    return (
      <div className="newsItem">
        {this.getRank()}
        {this.getVote()}
        <div className="newsItem__itemText">
          {this.getTitle()}
          {this.getSubtext()}
        </div>
      </div>
    );
  }
});

module.exports = NewsItem;
