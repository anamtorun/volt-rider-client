import { useQuery } from 'react-query';
import { Spinner } from '../../../components';
import authFetch from '../../../config/axios';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const fetchData = async () => {
  const { data } = await authFetch('/products');
  return data;
};

export const AllProducts = () => {
  const { data: productList, isLoading } = useQuery('products', fetchData);

  const handleCancel = async () => {};

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="py-10 px-8 xl:px-20">
      <h1 className="text-2xl font-medium text-neutral mb-5 -mt-4">
        Products : {productList?.length}
      </h1>
      {productList?.length === 0 ? (
        <h1 className="text-2xl lg:text-3xl text-neutral font-semibold text-center py-20">
          You have not ordered anything yet!
        </h1>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="p-4"></th>
                <th className="text-left p-4 font-medium  text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Name
                    <i>
                      <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                    </i>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Price
                    <i>
                      <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                    </i>
                  </div>
                </th>

                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Available Quantity
                    <i>
                      <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                    </i>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Minimum Order
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
              {productList?.map((product) => (
                <tr key={product._id}>
                  <td className="p-4">
                    <div class="avatar">
                      <div class="w-16 rounded-full ring ring-slate-200 ring-offset-base-100 ring-offset-2">
                        <img src={product.image} alt={product.name} />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-medium whitespace-nowrap">{product.name}</td>

                  <td className="p-4 text-gray-700 whitespace-nowrap">
                    $ {product.price?.toFixed(2)}
                  </td>
                  <td className="p-4 text-gray-700 whitespace-nowrap">
                    {product.available_quantity}
                  </td>
                  <td className="p-4 text-gray-700 whitespace-nowrap">
                    {product.min_order_quantity}
                  </td>

                  <td>
                    <div className="flex gap-1">
                      <Link to={`/products/details/${product._id}`} className="btn btn-xs">
                        Details
                      </Link>
                      <button className="btn btn-accent btn-xs">Edit</button>
                      <button className="btn btn-error btn-xs">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

            {productList?.length > 10 && (
              <tfoot>
                <tr>
                  <th className="p-4"></th>
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
                      Price
                      <i>
                        <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                      </i>
                    </div>
                  </th>

                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                      Available Quantity
                      <i>
                        <MdOutlineKeyboardArrowDown className="w-4 h-4 ml-1.5 text-gray-700" />
                      </i>
                    </div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                      Minimum Order
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
              </tfoot>
            )}
          </table>
        </div>
      )}
    </section>
  );
};
