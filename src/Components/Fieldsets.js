import React from 'react';
import Option from './Option';
import Feature from './Feature';

export default class Fieldsets extends React.Component {
  render() {
    return(
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      )

  };
}
