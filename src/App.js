import { Routes, Route } from 'react-router-dom';
import { Footer } from './components';
import { Navbar } from './components/shared/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
