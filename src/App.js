import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { SignUp, Home } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
