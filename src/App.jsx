import './App.css';
import AppRouter from './router/AppRouter';
import Header from './pages/Header';
import Footer from './pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
