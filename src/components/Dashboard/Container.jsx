import { Link, Outlet, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

export const Container = () => {
  const location = useLocation();

  const matchRoute = (route) => route === location.pathname;
  const activeClass = 'bg-primary text-base-100';
  const inactiveClass = 'bg-transparent hover:bg-base-200 active:bg-primary';

  return (
    <div className="drawer drawer-mobile bg-slate-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <label for="my-drawer-2" className="drawer-button lg:hidden flex items-center pl-5 pt-2">
          <IoIosArrowForward className="font-bold text-xl" />
          <span className="font-medium ml-1">Sidebar</span>
        </label>
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 gap-3 overflow-y-auto w-max lg:w-80 lg:border-r border-gray-200 bg-slate-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link
              to="/dashboard"
              className={matchRoute('/dashboard') ? activeClass : inactiveClass}
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/add-review"
              className={matchRoute('/dashboard/add-review') ? activeClass : inactiveClass}
            >
              Add Review
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/my-profile"
              className={matchRoute('/dashboard/my-profile') ? activeClass : inactiveClass}
            >
              My Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
