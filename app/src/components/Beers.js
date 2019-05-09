/* eslint-disable*/
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import axios from 'axios';
import Header from './Header';
import BeerRow from './BeerRow';
// Redux
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers'

class Beers extends React.Component {
    // state = {
    //   beers: [],
    // }

    // async componentDidMount() {
    //   const response = await axios.get('https://ironbeerapi.herokuapp.com/beers/all');
    //   this.setState({
    //     beers: response.data,
    //   });
    // }

   


    render() {
      // const { beers } = this.state;
      // const { beers } = this.props;

      // const beerElements = beers.map(beer => <BeerRow {...beer} key={beer._id} />);

      return (
        <React.Fragment>
          <h2>
            <Header />
          </h2>
          <BeerRow />
          {/* <div>{beerElements}</div> */}
        </React.Fragment>
      );
    }
}

const mapStateToProps = state => ({
  beers: state.beers.allBeers
})

export default connect(mapStateToProps, { getBeers })(Beers);
