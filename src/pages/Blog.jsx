import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { ImPointRight } from 'react-icons/im';
import code from '../assets/code/code.jpeg';

export const Blog = () => {
  return (
    <section className="py-16 min-h-screen">
      <div className="space-y-4 max-w-4xl mx-auto">
        <details className="p-6 rounded-lg bg-gray-50 group" open>
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="font-medium text-gray-900">
              How will you improve the performance of a React Application?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-4 leading-relaxed text-gray-700">
            We can improve the performance of React Application in many different ways. Some
            efficient ways to optimize the performance is pointed out below. <br />
            <br />
            <div className="pl-4">
              <p className="flex gap-2 items-center">
                <MdOutlineKeyboardArrowRight className="font-bold text-xl shrink-0" /> Use
                React.Lazy and React.Suspense for lazy loading react components
              </p>
              <p className="flex gap-2 items-center">
                <MdOutlineKeyboardArrowRight className="font-bold text-xl shrink-0" /> To optimize
                component memoization use React.Memo
              </p>
              <p className="flex gap-2 items-center">
                <MdOutlineKeyboardArrowRight className="font-bold text-xl shrink-0" /> Use
                React.Fragments to avoid adding extra nodes to the dom{' '}
              </p>

              <p className="flex gap-2 items-center">
                <MdOutlineKeyboardArrowRight className="font-bold text-xl shrink-0" /> Lazy load the
                images{' '}
              </p>

              <p className="flex gap-2 items-center">
                <MdOutlineKeyboardArrowRight className="font-bold text-xl shrink-0" />{' '}
                Code-splitting in React using dynamic import
              </p>

              <p className="flex gap-2 items-center">
                <MdOutlineKeyboardArrowRight className="font-bold text-xl shrink-0" /> Keeping
                component state local where necessary
              </p>
            </div>
          </div>
        </details>

        <details className="p-6 rounded-lg bg-gray-50 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="font-medium text-gray-900">
              What are the different ways to manage a state in a React application?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-4 leading-relaxed text-gray-700">
            <p className="mb-1">
              There are number of ways available for us to manage state in react.
            </p>
            <p className="mb-2">
              React gives us in built useState hook which we can use to manage state locally and
              also pass the data using prop drilling method or by lifting the state. However,
              sometimes it gets really cumbersome to prop drill or state lifting, hence react
              introduced Context Api. An inbuilt global state management solution. Combining context
              api with useReducer hook makes the work really to handle the state in React.
            </p>
            There are also 3rd party state management solution available. For example Redux. To be
            more specific, Redux Toolkit. Redux is good, but redux toolkit is more efficient and
            performant. It is an opinionated, batteries-included toolset for efficient Redux
            development.
          </div>
        </details>

        <details className="p-6 rounded-lg bg-gray-50 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="font-medium text-gray-900">
              Why you do not set the state directly in React. For example, if you have const
              [products, setProducts] = useState([]). Why you do not set products = [...] instead,
              you use the setProducts
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-4 leading-relaxed text-gray-700">
            <p className="mb-2">
              React is a declarative JS UI library. We built react app on top of components. When a
              part of the component's state gets modified, everything that is below or related to
              that component get's notified and triggers re-render. In that way, react only updates
              the part which has been changed/modified. For that, react marks every node element by
              giving individual unique id.
            </p>

            <p className="mb-2">
              Our responsibility is to make the react notify that there is change happened or state
              is changed. To do that we use react state like useState. When we set
              setProducts(products) we notify the react that state has changed. And react triggers
              re-render when state is changed.
            </p>
            <p>
              In case, we set products = [...] ; This way react does not know that state has
              changed. Hence, it will not trigger re-render. Therefore, we have to set the state in
              react way.
            </p>
          </div>
        </details>

        <details className="p-6 rounded-lg bg-gray-50 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="font-medium text-gray-900">
              You have an array of products. Each product has a name, price, description, etc. How
              will you implement a search to find products by name?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-4 leading-relaxed text-gray-700">
            <img src={code} alt="problem solution" />
          </div>
        </details>

        <details className="p-6 rounded-lg bg-gray-50 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="font-medium text-gray-900">
              What is a unit test? Why should write unit tests?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-4 leading-relaxed text-gray-700">
            <p className="mb-2">
              It is a type of software testing where individual components are tested to make sure
              that each component or unit performs as expected. Since we write tests for small
              individual units of an application hence it is called unit testing.
            </p>
            <p className="mb-2 font-medium">Why unit testing?</p>
            <p className="mb-2">There are many advantages of unit testing. For example, </p>
            <div className="ml-4">
              <p className="flex gap-2 mb-2">
                <ImPointRight className="font-bold text-xl shrink-0" /> Unit tests make it safer and
                easier to refactor the code by putting tests into place that make sure refactoring
                occurs without problems and disruption.
              </p>
              <p className="flex gap-2 mb-2">
                <ImPointRight className="font-bold text-xl  shrink-0" /> It makes the process of
                debugging easier.
              </p>
              <p className="flex gap-2 mb-2">
                <ImPointRight className="font-bold text-xl shrink-0" /> Improves the quality of the
                code. It identifies every defect that may have come up before code is sent further
                for integration testing. etc.
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};
