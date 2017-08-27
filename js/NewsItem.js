import React, { Component } from 'react';
const url = require('url');
const moment = require('moment');

class NewsItem extends Component {
  constructor() {
    super()
  }

  getDomain () {
    // return url.parse(this.props.item.url).hostname;
    console.log(typeof this.props.item.url)
    return this.props.item.url;
  }

  getCommentLink () {
    var commentText = 'discuss';
    if (this.props.item.kids && this.props.item.kids.length > 0) {
      commentText = this.props.item.kids.length + ' comments';
    }
    return (
      <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>
        {commentText}
      </a>
    )
  }

  getSubtext () {
    return (
      <div className="newsItem__subtext">
        {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {moment.utc(this.props.item.time * 1000).fromNow()}  | {this.getCommentLink()}
      </div>
    )
  }

  getTitle () {
    return (
      <div className="newsItem__title">
        <a className="newsItem__titleLink" href={this.props.item.url}>{this.props.item.title}</a>
        <a className="newsItem__domain" href={'https://news.ycombinator.com/from?=' + this.getDomain()}>({this.getDomain()})</a>
      </div>
    )
  }

  getRank () {
    return (
      <div className="newsItem__rank">
        {this.props.rank}
      </div>
    )
  }

  getVote () {
    return (
      <div className="newsItem__vote">
        <a href={'https://news.ycombinator.com/vote?id=' + this.props.item.id + 'how=up&goto=news'}>
          <img src="../img/grayarrow2x.gif" width="10"/>
        </a>
      </div>
    )
  }

  render  () {
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
}

export default NewsItem;
