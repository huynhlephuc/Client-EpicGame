import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Store from './Components/Store/Store.jsx';
import Sales from './Components/Sales/Sales.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
      <>
        <Header/>
        <Store/>
        <Sales/>
        <Footer/>
      </>
  );
}

export default App;
