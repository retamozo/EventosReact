import React from "react";
import CategoriesProvider from './context/CategoriesProvider'
import Header from "./components/Header";

const App = () => (
  <CategoriesProvider>
    <Header />
  </CategoriesProvider>
);

export default App;
