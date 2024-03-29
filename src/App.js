import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
      <Routes>
        <Route path='/' element={<HomeScreen />} exact />
        <Route path='/about' element={<AboutScreen />} />
      </Routes>
      </main>
    <Footer />
  </Router>
  );
}

export default App;
