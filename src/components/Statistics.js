import React from 'react';

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

export default Statistics;