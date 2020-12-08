import React from 'react';

function FeedbackOptions ({ onClick }) {
  return (
    <div>
      <button style={{margin: '10px'}}
        type="button"
        name="good"
        onClick={() => {
          onClick('good');
        }}
      >
        Good
      </button>
      <button style={{margin: '10px'}}
        type="button"
        name="neutral"
        onClick={() => {
          onClick('neutral');
        }}
      >
        Neutral
      </button>
      <button style={{margin: '10px'}}
        type="button"
        name="bad"
        onClick={() => {
          onClick('bad');
        }}
      >
        Bad
      </button>
    </div>
  )
}

export default FeedbackOptions;