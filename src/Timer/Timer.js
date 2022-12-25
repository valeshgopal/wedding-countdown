import styles from './Timer.module.css';
import React from 'react';
import Countdown from 'react-countdown';

const Timer = () => {
  const Completionist = () => <span>Congratulations!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <section className={styles.countdown}>
          <div>
            <span className={styles.duration}>{days} </span>
            <span className={styles.label}>Days</span>
          </div>
          <div>
            <span className={styles.duration}>{hours} </span>
            <span className={styles.label}>Hours</span>
          </div>
          <div>
            <span className={styles.duration}>{minutes} </span>
            <span className={styles.label}>Minutes</span>
          </div>
          <div>
            <span className={styles.duration}>{seconds} </span>
            <span className={styles.label}>Seconds</span>
          </div>
        </section>
      );
    }
  };
  return (
    <div className={styles.timer}>
      <Countdown
        date={new Date('February 11, 2023 21:13:00')}
        renderer={renderer}
      />
    </div>
  );
};

export default Timer;
