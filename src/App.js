import React from 'react';
import './App.scss';
import Header from './components/header/index';
import Products from './components/products/index';
import NewProduct from './components/newProduct/index';
import EditProduct from './components/editProduct/index';

// Importing Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Redux
// First importgins Provider then store created.
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store = {store}>

          <Header/>
          <div className= "container">
            <Switch>
              <Route exact path = "/" component = {Products} />
              <Route exact path = "/products/new" component = {NewProduct} />
              <Route excct path = "/products/edit" component = {EditProduct} />
            </Switch>
          </div>
        </Provider>

      </Router>
      

      
    </div>
  );
}

export default App;
