import { MdOutlineReviews } from 'react-icons/md';
import { VscTools } from 'react-icons/vsc';
import { Ticker } from '../shared/Ticker';
export const Summary = () => {
  return (
    <div className="max-w-[1024px] mx-auto ">
      <h2 className="text-center font-bold text-neutral text-3xl">Our Business keeps growing</h2>
      <div className="py-10">
        <section className="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Served</div>
            <div className="stat-value text-primary">
              <Ticker end={2500} suffix="+" />
            </div>
            <div className="stat-desc">customers</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Annual Revenue</div>
            <div className="stat-value text-accent">
              <Ticker end={10.5} suffix="M+" decimal={1} />
            </div>
            <div className="stat-desc">21% more than last year</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <MdOutlineReviews className="w-8 h-8" />
            </div>
            <div className="stat-title">Reviews</div>
            <div className="stat-value text-secondary">
              <Ticker end={1.5} suffix="K+" decimal={1} />
            </div>
            <div className="stat-desc">keep on coming</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-cyan-600">
              <VscTools className="w-8 h-8" />
            </div>
            <div className="stat-title">Tools</div>
            <div className="stat-value text-cyan-600">
              <Ticker end={100} suffix="+" />
            </div>
            <div className="stat-desc">in the inventory</div>
          </div>
        </section>
      </div>
    </div>
  );
};
