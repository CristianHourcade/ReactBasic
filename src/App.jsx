import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';
import { EcommerceProvider } from './context/EcommerceContext';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <EcommerceProvider>
          <Switch>

            <Route exact path="/">
              <HomeContainer />
            </Route>

            <Route exact path="/productos">
              <ProductsContainer />
            </Route>

            <Route path="/productos/:busqueda">
              <ProductsContainer />
            </Route>

          </Switch>
        </EcommerceProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
