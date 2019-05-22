import React, { Component } from 'react';
import './App.sass';
import './common.sass';
import CatLoaderContainer from './catloader/CatLoaderContainer';
import CategoriesContainer from './categories/CategoriesContainer'
import CatListContainer from './catlist/CatListContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Cat-egory</h2>
        <div className='catWrapper'>
          <CatLoaderContainer />
          <CategoriesContainer />
        </div>
        <CatListContainer />
      </div>
    );
  }
}

export default App;
