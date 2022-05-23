import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { SignUp, Home, Login } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/details/:id" element={<div>hello</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
