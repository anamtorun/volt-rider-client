import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Spinner } from '../../components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import authFetch from '../../config/axios';
import auth from '../../config/firebase';
import { confirmModal } from '../../utils/ConfirmModal';
import MySwal from '../../config/sweetAlert';

export const MyOrders = () => {
  const [user, loading] = useAuthState(auth);

  const fetchData = async () => {
    if (user) {
      const { data } = await authFetch.get(`/orders/${user.email}`);
      return data;
    }
  };
  const { data, isLoading, refetch } = useQuery('data', fetchData);

  const handleCancel = async (id) => {
    const res = await confirmModal(
      'You want to cancel your order?',
      'Yes, cancel it',
      'No',
      'Success',
      'success',
      'Your order is cancelled successfully'
    );

    if (res.isConfirmed) {
      const { data: response } = await authFetch(`/orders/cancel/${id}`);

      if (response.deleteCount > 0) {
        MySwal.fire('Success', 'Your order is cancelled successfully', 'success');
        refetch();

        await authFetch.patch(`/products/update-available-quantity/${id}`, {
          quantity: data.orderQuantity,
        });
      }
    }
  };

  if (loading || isLoading) {
    return <Spinner />;
  }
  return (
    <section className="py-10 px-8 xl:px-20">
      {data?.length === 0 ? (
        <h1 className="text-2xl lg:text-3xl text-neutral font-semibold text-center py-20">
          You have not ordered anything yet!
        </h1>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Name
                    <i>
                      <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                    </i>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Status
                    <i>
                      <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                    </i>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Order Quantity
                    <i>
                      <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                    </i>
                  </div>
                </th>

                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Total
                    <i>
                      <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                    </i>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Amount Paid
                    <i>
                      <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                    </i>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Actions
                    <i>
                      <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                    </i>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {data?.map((order, i) => (
                <tr key={order._id}>
                  <td className="p-4 font-medium whitespace-nowrap">{order.productName}</td>
                  <td className="p-4 whitespace-nowrap">
                    {order.status === 'pending' ? (
                      <strong className="bg-amber-100 text-amber-700 px-3 py-1.5 rounded text-xs font-medium">
                        Pending
                      </strong>
                    ) : (
                      <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                        Shipped
                      </strong>
                    )}
                  </td>
                  <td className="p-4 text-gray-700 whitespace-nowrap">{order.orderQuantity}</td>

                  <td className="p-4 text-gray-700 whitespace-nowrap">
                    $&nbsp;{order.total.toFixed(2)}
                  </td>
                  <td className="p-4 text-gray-700 whitespace-nowrap">
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
                          className="btn btn-sm btn-accent normal-case text-neutral text-opacity-90"
                        >
                          Pay now
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-error normal-case text-neutral text-opacity-80"
                          onClick={() => handleCancel(order?._id)}
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
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">Name</div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">Status</div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">Order Quantity</div>
                  </th>

                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">Total</div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">Amount Paid</div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">Actions</div>
                  </th>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      )}
    </section>
  );
};
