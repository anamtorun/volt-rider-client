import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Spinner } from '../../components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import authFetch from '../../config/axios';
import auth from '../../config/firebase';

export const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const fetchData = async () => {
    if (user) {
      const { data } = await authFetch.get(`/orders/${user.email}`);
      return data;
    }
  };
  const { data, isLoading } = useQuery('data', fetchData);

  if (loading || isLoading) {
    return <Spinner />;
  }
  return (
    <section className="py-10 px-8 xl:px-20">
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm divide-y divide-gray-200">
          <thead>
            <tr>
              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  Name
                  <i>
                    <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                  </i>
                </div>
              </th>
              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  Status
                  <i>
                    <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                  </i>
                </div>
              </th>
              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  Order Quantity
                  <i>
                    <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                  </i>
                </div>
              </th>

              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  Total
                  <i>
                    <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                  </i>
                </div>
              </th>
              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  Amount Paid
                  <i>
                    <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                  </i>
                </div>
              </th>
              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  Actions
                  <i>
                    <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                  </i>
                </div>
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100">
            {data?.map((order, i) => (
              <tr key={order._id}>
                <td class="p-4 font-medium whitespace-nowrap">{order.productName}</td>
                <td class="p-4 whitespace-nowrap">
                  {order.status === 'pending' ? (
                    <strong class="bg-amber-100 text-amber-700 px-3 py-1.5 rounded text-xs font-medium">
                      Pending
                    </strong>
                  ) : (
                    <strong class="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                      Shipped
                    </strong>
                  )}
                </td>
                <td class="p-4 text-gray-700 whitespace-nowrap">{order.orderQuantity}</td>

                <td class="p-4 text-gray-700 whitespace-nowrap">$&nbsp;{order.total.toFixed(2)}</td>
                <td class="p-4 text-gray-700 whitespace-nowrap mx-auto">
                  {order?.paid ? (
                    <i>
                      <div className="sr-only">Yes Paid</div>
                      <AiOutlineCheck className="w-6 h-6 font-bold text-success" />
                    </i>
                  ) : (
                    <i>
                      <div className="sr-only">Not Paid yet</div>
                      <AiOutlineClose className="w-6 h-6 font-bold text-error" />
                    </i>
                  )}
                </td>
                <td>
                  {!order.paid && (
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        class="btn btn-sm btn-accent normal-case text-neutral text-opacity-90"
                      >
                        Pay now
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-error normal-case text-neutral text-opacity-80"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

          {data?.length > 10 && (
            <tfoot>
              <tr className="bg-slate-50">
                <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div class="flex items-center">Name</div>
                </th>
                <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div class="flex items-center">Status</div>
                </th>
                <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div class="flex items-center">Order Quantity</div>
                </th>

                <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div class="flex items-center">Total</div>
                </th>
                <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div class="flex items-center">Amount Paid</div>
                </th>
                <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div class="flex items-center">Actions</div>
                </th>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </section>
  );
};
