import React from 'react';
import Total from './Total';
import Currency from './Currency';
import Option from './Option'
import Fieldsets from './Fieldsets';

class Summary extends React.Component {

  render() {

    return (
      <div>
        <Option selected={this.props.selected} />
        <Fieldsets />
        <Total />
      </div>
    );
  });
}

  }


export default Summary;
