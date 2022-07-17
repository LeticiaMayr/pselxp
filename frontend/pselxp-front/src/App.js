import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Account from './pages/Account';
import Stocks from './pages/Stocks';
import Operations from './pages/Operations';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> }/>
      <Route exact path="/account" element={ <Account /> }/>
      <Route exact path="/stocks" element={ <Stocks /> }/>
      <Route exact path="/operations" element={ <Operations /> }/>
    </Routes>
  );
}

export default App;
