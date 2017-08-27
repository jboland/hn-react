import React, { Component } from 'react';
const _ = require('lodash');

class NewsHeader extends Component {
  constructor() {
    super()
  }

  getNav () {
    var navLinks = [
      {
        name: 'new',
        url: 'newest'
      },
      {
        name: 'comments',
        url: 'newcomments'
      },
      {
        name: 'show',
        url: 'show'
      },
      {
        name: 'ask',
        url: 'ask'
      },
      {
        name: 'jobs',
        url: 'jobs'
      },
      {
        name: 'submit',
        url: 'submit'
      }
    ];

    return (
      <div className="newsHeader__nav">
        {_(navLinks).map(function(navLink) {
          return (
            <a key={navLink.url} className="newsHeader__navLink newsHeader__textLink" href={'https://news.ycombinator.com/' + navLink.url}>
              {navLink.name}
            </a>
          )
        }).value()}
      </div>
    );
  }

  getLogo () {
    return (
      <div className="newsHeader__logo">
        <a href="https://news.ycombinator.com/"><img src="../img/y18.gif" /></a>
      </div>
    );
  }

  getTitle () {
    return (
      <div className="newsHeader__title">
        <a className="newsHeader__textLink" href="https://news.ycombinator.com/news">Hacker News</a>
      </div>
    );
  }

  getLogin () {
    return (
      <div className="newsHeader__login">
        <a className="newsHeader__textLink" href="https://news.ycombinator.com/login?goto=news">login</a>
      </div>
    );
  }

  render () {
    return (
      <div className="newsHeader">
        {this.getLogo()}
        {this.getTitle()}
        {this.getNav()}
        {this.getLogin()}
      </div>
    )
  }
};

export default NewsHeader;
