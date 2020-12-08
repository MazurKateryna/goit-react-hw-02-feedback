import React, {Component} from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotal() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositivePercentage() {
    const { good } = this.state;
    const result = Math.round((good * 100) / this.countTotal()).toFixed(0);
    return result;
  }

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onClick={this.onLeaveFeedback} />
        </Section>
        {this.countTotal() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotal()}
              positivePercentage={this.countPositivePercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default App;

