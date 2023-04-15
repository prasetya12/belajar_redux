import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ListProduct from './components/ListProduct';
function App() {

  return (
    <>
      <div className='flex flex-col'>
        <Header />
        <ListProduct />
      </div>
    </>
  );
}

export default App;

//actions -> trigger to store
//reducers -> handle trigger 
//store -> menyimpan
