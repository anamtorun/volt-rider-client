import { Ticker } from './Ticker';

export const Stat = ({ title, tickerValue, tickerSuffix, desc, icon, color, decimals }) => {
  return (
    <div className="stat">
      <div className={`stat-figure ${color}`}>{icon}</div>
      <div className="stat-title">{title}</div>
      <div className={`stat-value ${color}`}>
        <Ticker end={tickerValue} suffix={tickerSuffix} decimals={decimals} />
      </div>
      <div className="stat-desc">{desc}</div>
    </div>
  );
};
