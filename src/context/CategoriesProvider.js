import React, { Component } from "react";
import axios from "axios";

const CategoriesContext = React.createContext();

export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {
  token = "CGWOHRQRT3FNEBS3CLEU";
  uri = "https://www.eventbriteapi.com/v3";

  state = {
      categories : []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let uri = `${this.uri}/categories/?token=${this.token}&locale=es_ES`;
    let requestCategorie = await axios.get(uri)
    this.setState({
        categories: requestCategorie.data.categories
    })

  };

  render() {
    return (
        <CategoriesContext.Provider
            value={{
                categories : this.state.categories
            }}
        >
            {this.props.children}
        </CategoriesContext.Provider>
    )
  }
}

export default CategoriesProvider;
