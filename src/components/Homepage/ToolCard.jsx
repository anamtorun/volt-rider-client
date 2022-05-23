export const ToolCard = ({ item }) => {
  const { name, description, min_order_quantity, available_quantity, price, image } = item;

  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="bg-base-200 p-4 min-h-[18.75rem]">
        <img className="rounded w-full object-cover object-center" src={image} alt={name} />
      </div>
      <div className="flex items-center px-6 py-3 bg-gray-800">
        <h1 className="mx-3 text-lg font-semibold text-white">{name}</h1>
      </div>

      <div className="px-6 py-4">
        <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>

        <div className="flex items-center justify-between flex-wrap gap-2 mt-2 text-gray-700 dark:text-gray-200">
          <div className="badge badge-outline">
            Price:
            <span className="ml-1 font-medium">
              ${price.toFixed(2)} / <span className="text-sm">unit</span>
            </span>
          </div>
          <div className="badge badge-outline">
            Available <span className="hidden xl:inline-block">&nbsp;quantity</span>:{' '}
            <span className="font-medium ml-1"> {available_quantity}</span>
          </div>
        </div>

        <div className="badge badge-outline flex items-center mt-2 text-gray-700 dark:text-gray-200">
          Minimum order <span className="hidden xl:inline-block">&nbsp;quantity</span>:
          <span className="font-medium ml-1"> {min_order_quantity}</span>
        </div>
        <div className="flex mt-6">
          <button className="btn-md btn btn-outline w-full text-gray-800 tracking-wide font-bold">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};
