//dependancies 
import React from 'react';
import { connect } from 'react-redux';


const Smurf = props => {

    return (
      <div className="smurfCard">
        <h3>Name: {props.smurf.name}</h3>
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
        <p>ID:{props.smurf.id} </p>
      </div>
    );
  };

  const mapStateToProps = state => {
    return { 
        state 
    };
  };

  export default connect(mapStateToProps, { })(Smurf);  