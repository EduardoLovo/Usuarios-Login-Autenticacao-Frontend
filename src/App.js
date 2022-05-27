import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Users } from './pages/Users/Users';
import { Home } from './pages/Home/Home';
import { Cadastro } from './pages/Cadastro/Cadastro';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
