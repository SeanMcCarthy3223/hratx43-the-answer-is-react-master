import React from 'react';
import PropTypes from 'prop-types';
import App from './App';

const Clue = props => {
  console.log(props);
  return (
  
    <div className={'clueValue'}>${props.clue.value}</div>
    
  //{if (App.answeredquestions.contains({props.id})) ? <div className={'clueValue'}>${props.clue.game_id}</div> : <div className={'clueValue'}>${props.clue.value}</div>))}
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  )
  //return 'hi';
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
