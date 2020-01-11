import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    categorie: ""
  };
  render() {
    return (
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Look for your event by name or categorie
          </legend>
        </fieldset>
        <div className="uk-column-1-3@m uk-margin">
          <div className="uk-margin" uk-margin="true">
            <input
              name="name"
              className="uk-input"
              type="text"
              placeholder="Name of event..."
            />
          </div>
          <div className="uk-margin" uk-margin="true">
            <select className="uk-select" name="categories"></select>
          </div>
          <div>
            <input
              type="submit"
              className="uk-button uk-button-danger"
              uk-button-dangerouslySetInnerHTML
              value="Search events"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
