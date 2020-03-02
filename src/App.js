import React from 'react';
import './App.scss';
import Header from './components/header/index';
import Products from './components/products/index';
import NewProduct from './components/newProduct/index';
import EditProduct from './components/editProduct/index';

// Importing Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Header/>
        <div className= "container">
          <Switch>
            <Route exact path = "/" component = {Products} />
            <Route exact path = "/products/new" component = {NewProduct} />
            <Route excct path = "/products/edit" component = {EditProduct} />
          </Switch>
        </div>

      </Router>
      

      
    </div>
  );
}

export default App;
