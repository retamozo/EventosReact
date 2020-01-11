import React from "react";
import CategoriesProvider from './context/CategoriesProvider'
import Header from "./components/Header";
import Form from './components/Header/Form'

const App = () => (
  <CategoriesProvider>
    <Header />
    <div className="uk-container">
      <Form/>
    </div>
  </CategoriesProvider>
);

export default App;
