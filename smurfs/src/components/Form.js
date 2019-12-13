//dependancies 
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/Index';

const Form = props => {
    const [newSmurf, setNewSmurf] = useState({});

    const handleName = e => {
      setNewSmurf({ ...newSmurf, name: e.target.value });
    };

    const handleAge = e => {
      setNewSmurf({ ...newSmurf, age: e.target.value });
    };

    const handleHeight = e => {
      setNewSmurf({ ...newSmurf, height: e.target.value });
    };

    const addSmurf = e => {
      e.preventDefault();
      props.addSmurf({ ...newSmurf, id: props.state.length});
      setNewSmurf({...newSmurf, name: '', age: '', height: '' });
    };
    // const delSmurf = e => {
    //     e.preventDefault();
    //     props.setState({ null });
    //   };

    return (
      <form action="">
        <h3>Collect Info for New Smurf</h3>
        <input placeholder='Name' onChange={handleName} value={newSmurf.name} />
        <input placeholder='Age' onChange={handleAge} value={newSmurf.age} />
        <input placeholder='Height' onChange={handleHeight} value={newSmurf.height} />
        <br/>
        <button onClick={addSmurf} className='smurfButton'>Add Smurf</button>
        {/* <button onClick={delSmurf} className='smurfButton'>Kill Smurf</button> */}
      </form>
    );
  };

  const mapStateToProps = state => {
    return { state };
  };

  export default connect(mapStateToProps, { addSmurf })(Form); 