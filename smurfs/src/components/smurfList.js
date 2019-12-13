//dependancies 
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/Index';

//components
import Smurf from './Smurf';
import Form from './Form'

const SmurfList = (props) => {
    // console.log(props)

    useEffect(() => {
        props.getSmurfs();
      }, [])

    return(
        <div>
            <h2>
                Current Smurfs
            </h2>
            {props.state.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}

            <Form/>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
       state
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList) 