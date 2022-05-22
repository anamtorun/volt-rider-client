import { useState } from 'react';
import CountUp from 'react-countup';
import { Waypoint } from 'react-waypoint';

export const Ticker = ({ end, suffix, decimal }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  return (
    <Waypoint onEnter={onVWEnter}>
      {viewPortEntered && (
        <CountUp end={end} suffix={suffix} decimals={decimal} duration={3}></CountUp>
      )}
    </Waypoint>
  );
};
