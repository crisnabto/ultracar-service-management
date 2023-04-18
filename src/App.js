import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useMemo, useState } from 'react';
import protectedRoute from './services/protectedRoute';
import Context from './Context/Context';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import clients from './services/clientsData';
import Servicos from './pages/Servicos';
import Details from './components/Details';

function App() {
  const [allClients, setAllClients] = useState(clients);
  const contextValue = useMemo(() => ({
    allClients,
    setAllClients,
  }), [allClients, setAllClients]);

  return (
    <Context.Provider
      value={contextValue}
    >
      <Switch>
        <Route exact path="/orders/:id" component={protectedRoute(Details)} />
        <Route exact path="/dashboard" component={protectedRoute(Dashboard)} />
        <Route exact path="/clientes" component={protectedRoute(Clients)} />
        <Route exact path="/servicos" component={protectedRoute(Servicos)} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Context.Provider>
  );
}

export default App;
