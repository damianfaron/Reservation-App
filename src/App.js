import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Table from './components/pages/Table';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
 
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/:id' element={<Table />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </Container>
  );
};

export default App;
