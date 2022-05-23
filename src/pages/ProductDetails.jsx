import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../config/firebase';
import { Spinner } from '../components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

const phoneRegex =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ProductDetails = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);

  const fetchData = async () => {
    const { data } = await axios(`http://localhost:5000/products/details/${id}`);
    return data;
  };

  const { data, isLoading } = useQuery(['data', id], fetchData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: user?.displayName,
      email: user?.email,
      address: '',
      phoneNumber: '',
      orderQuantity: data?.min_order_quantity,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (data) {
      setValue('orderQuantity', data.min_order_quantity);
    }
  }, [data, setValue]);
  const onSubmit = (values) => console.log(values);

  if (isLoading || loading) {
    return <Spinner />;
  }

  return (
    <section className="bg-slate-50 min-h-[70vh] px-5 py-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
          {/* Image */}
          <div className="max-w-sm min-w-[290px]">
            <img src={data?.image} alt={data?.name} className="w-full object-cover" />
          </div>
          {/* Image */}

          {/* Description */}
          <div>
            <h1 className="text-2xl font-bold text-neutral">{data?.name}</h1>
            <p className="text-base text-gray-600 my-4">{data?.description}</p>

            <div className="py-4">
              <div className="my-1 xl:max-w-[75%] flex justify-between">
                <p className="font-semibold text-neutral">Price</p>
                <p>${data?.price.toFixed(2)} / unit</p>
              </div>
              <div className="my-1 xl:max-w-[75%] flex justify-between">
                <p className="font-semibold text-neutral">Available Quantity</p>
                <p>{data?.available_quantity}</p>
              </div>
              <div className="my-1 xl:max-w-[75%] flex justify-between">
                <p className="font-semibold text-neutral">Minimum order quantity</p>
                <p>{data?.min_order_quantity}</p>
              </div>
            </div>
          </div>
          {/* Description */}
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto shadow p-8 pt-4">
            {/* Name */}
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                className="input input-bordered w-full"
                {...register('name', {
                  required: { value: true, message: 'Name is required' },
                })}
              />
            </div>
            <p className="text-sm text-error mt-1">{errors.name?.message}</p>
            {/* Email */}
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="input input-bordered w-full"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Please enter your email',
                  },
                  pattern: {
                    value: emailRegex,
                    message: 'Not a valid email address',
                  },
                })}
              />
            </div>
            <p className="text-sm text-error mt-1">{errors.email?.message}</p>

            {/* Address */}
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                placeholder="Type your address"
                id="address"
                className="input input-bordered w-full"
                {...register('address', { required: 'Address is required' })}
              />
            </div>
            <p className="text-sm text-error mt-1">{errors.address?.message}</p>

            {/* Phone number */}
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Your phone number"
                id="phoneNumber"
                className="input input-bordered w-full"
                {...register('phoneNumber', {
                  require: 'Phone number is required',
                  pattern: {
                    value: phoneRegex,
                    message: 'Not a valid phone number',
                  },
                })}
              />
            </div>
            <p className="text-sm text-error mt-1">{errors.phoneNumber?.message}</p>

            {/* Order quantity */}
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="orderQuantity"
              >
                Order Quantity
              </label>
              <input
                type="text"
                placeholder="Quantity. eg: 100"
                id="orderQuantity"
                className="input input-bordered w-full"
                {...register('orderQuantity', {
                  required: { value: true, message: 'Quantity is required' },
                  min: data?.min_order_quantity,
                  max: data?.available_quantity,
                  valueAsNumber: true,
                  validate: {
                    number: (v) => !isNaN(v) || 'should be a number',
                  },
                })}
              />
            </div>

            <p className="text-sm text-error mt-1">{errors.orderQuantity?.message}</p>
            {errors.orderQuantity?.type === 'min' && (
              <p className="text-sm text-error mt-1">{`Can not order less than ${data.min_order_quantity}`}</p>
            )}
            {errors.orderQuantity?.type === 'max' && (
              <p className="text-sm text-error mt-1">{`Can not order more than ${data.available_quantity}`}</p>
            )}
            <button
              type="submit"
              className={`mt-8 w-full px-4 py-2 tracking-wide btn font-normal normal-case text-base ${
                loading && 'loading'
              }`}
              disabled={errors.orderQuantity}
            >
              {!loading && 'Place Order'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
