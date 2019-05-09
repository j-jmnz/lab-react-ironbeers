/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import Header from './Header';

class NewBeer extends React.Component {
    state = {
      beer: [],
    }

    render() {
      return (
        <React.Fragment>
          <h2>
            <Header />
          </h2>
          <div>NewBeer</div>
        </React.Fragment>
      );
    }
}

export default NewBeer;
