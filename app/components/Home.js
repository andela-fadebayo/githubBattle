var React = require('react');
var transparentBg = require('../styles/index').transparentBg;
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>Github Battle</h1>
        <p className="lead">What you see is what you get</p>
        <Link to="/playerOne">
          <button
            type="button"
            className="btn btn-lg btn-success">
              Get Started
          </button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
