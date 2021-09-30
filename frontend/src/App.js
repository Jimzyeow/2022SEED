import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ViewProducts from './components/Product/ViewProducts';
import ProductDetails from './components/Product/ProductDetails';
function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
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
