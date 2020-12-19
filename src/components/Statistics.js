import React from 'react';
import PropTypes from 'prop-types';

function Statistics ({ good, neutral, bad, total, positivePercentage}) {
  return (
    <div>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral} </p>
        <p>Bad: {bad}</p>
      </div>
      <div>
        <p>Total: {total} </p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </div>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;