import wireCrimpers from '../../assets/images/wire-crimpers.png';

export const ToolCard = () => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="bg-base-200 p-4">
        <img className="rounded w-full object-cover" src={wireCrimpers} alt="avatar" />
      </div>
      <div className="flex items-center px-6 py-3 bg-gray-800">
        <h1 className="mx-3 text-lg font-semibold text-white">Wire &amp; Cable Crimpers</h1>
      </div>

      <div className="px-6 py-4">
        <p className="py-2 text-gray-700 dark:text-gray-400">
          Crimp terminals onto the ends of wire and/or cable. Able to bend the metal of a terminals
          barrel and press it onto a bare strip of wire in a way that will not pull out or come
          loose over time.
        </p>

        <div className="flex items-center justify-between flex-wrap gap-2 mt-2 text-gray-700 dark:text-gray-200">
          <div className="badge badge-outline">
            Price:
            <span className="ml-1 font-medium">
              $99.00 / <span className="text-sm">unit</span>
            </span>
          </div>
          <div className="badge badge-outline">
            Available <span className="hidden xl:inline-block">&nbsp;quantity</span>:{' '}
            <span className="font-medium ml-1"> 120</span>
          </div>
        </div>

        <div className="badge badge-outline flex items-center mt-2 text-gray-700 dark:text-gray-200">
          Minimum order <span className="hidden xl:inline-block">&nbsp;quantity</span>:
          <span className="font-medium ml-1"> 100</span>
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
