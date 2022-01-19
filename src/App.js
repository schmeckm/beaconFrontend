import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Homepage/home';
import CreateGateway from './screens/Gateway/create';
import EditGateway from './screens/Gateway/edit';
import GatewayList from './screens/Gateway/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" name="This is a Home Page" element={<Home />} />
          <Route exact path="/create/gateway" name="Create Gateway" element={<CreateGateway />} />
          <Route exact path="/edit/gateway/:id" name="Edit Gateway" element={<EditGateway />} />
          <Route exact path="/gatewayList" name="Gateway List" element={<GatewayList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
