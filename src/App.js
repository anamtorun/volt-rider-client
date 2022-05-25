import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, PrivateRoute, RequireAdmin } from './components';
import {
  SignUp,
  Home,
  Login,
  ProductDetails,
  Dashboard,
  MyOrders,
  AddReview,
  MyProfile,
  AllUsers,
  AllOrders,
  AddProduct,
  AllProducts,
} from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoute />}>
          <Route path="/products/details/:id" element={<ProductDetails />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<MyProfile />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="add-review" element={<AddReview />} />

            <Route element={<RequireAdmin />}>
              <Route path="manage-users" element={<AllUsers />} />
              <Route path="manage-all-orders" element={<AllOrders />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="manage-products" element={<AllProducts />} />
            </Route>
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
