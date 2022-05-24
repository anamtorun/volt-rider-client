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
              <Route path="manage-users" element={<div></div>} />
              <Route path="manage-all-orders" element={<div></div>} />
              <Route path="add-product" element={<div></div>} />
              <Route path="manage-products" element={<div></div>} />
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
