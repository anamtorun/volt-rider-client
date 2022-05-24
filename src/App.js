import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, PrivateRoute } from './components';
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
