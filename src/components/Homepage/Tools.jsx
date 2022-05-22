import { Link } from 'react-router-dom';
import { ToolCard } from './ToolCard';

const arr = [1, 2, 3];
export const Tools = () => {
  return (
    <section className="py-10 lg:py-20">
      <h2 className="text-4xl text-center font-bold text-neutral">Our Products</h2>

      <section className="px-4 mt-16 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {arr.map((item, i) => (
          <ToolCard key={i} />
        ))}
      </section>
      <div className="flex justify-center mt-16">
        <Link to="/" className="btn btn-secondary">
          View All Products
        </Link>
      </div>
    </section>
  );
};
