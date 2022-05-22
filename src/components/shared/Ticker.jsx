import { useState } from 'react';
import CountUp from 'react-countup';
import { Waypoint } from 'react-waypoint';

export const Ticker = ({ end, suffix, decimals }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  return (
    <Waypoint onEnter={onVWEnter}>
      {viewPortEntered ? (
        <CountUp end={end} suffix={suffix} start={0} decimals={decimals} duration={3} />
      ) : null}
    </Waypoint>
  );
};
