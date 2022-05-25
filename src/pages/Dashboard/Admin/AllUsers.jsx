import { useQuery } from 'react-query';
import { Spinner } from '../../../components';
import authFetch from '../../../config/axios';
import MySwal from '../../../config/sweetAlert';
import { confirmModal } from '../../../utils/ConfirmModal';

const fetchAllUser = async () => {
  const { data } = await authFetch('/users');
  return data;
};

export const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery('users', fetchAllUser);

  const handleDelete = async (userId, name) => {
    const res = await confirmModal(`You want to remove ${name}?`, 'Yes, delete', 'No');

    if (res.isConfirmed) {
      const response = await authFetch.delete(`/users/delete/${userId}`);
      if (response.status === 204) {
        MySwal.fire('Success', `${name} was removed`, 'success');
        refetch();
      }
    }
  };
  const handleMakeAdmin = async (userId, name) => {};

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="py-10 px-8 xl:px-20">
      <h1 className="text-2xl font-medium text-neutral mb-5 -mt-4">
        Manage Users : {users?.length}
      </h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>
                  {user.role !== 'admin' && (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user._id, user.name)}
                        className="btn btn-accent btn-xs mr-2 normal-case"
                      >
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleDelete(user._id, user.name)}
                        className="btn btn-error hover:brightness-75 btn-xs normal-case"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
          {/* <!-- foot --> */}
          {users?.length > 10 && (
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </section>
  );
};
