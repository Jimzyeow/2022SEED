
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ViewProducts from './components/Product/ViewProducts';
import ProductDetails from './components/Product/ProductDetails';
import ViewCategories from './components/Product/ViewCategories';
function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <ViewCategories />
            </Route>
            <Route path="/:id/products/">
              <ViewProducts />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
