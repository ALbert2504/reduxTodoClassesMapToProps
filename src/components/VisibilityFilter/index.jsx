import React from "react";

//Redux
import * as visibilityActions from "../../store/visibilityFilter/actions";
import {connect} from 'react-redux';

//styles
import styles from './VisibilityFilter.module.css';

const VisibilityFilter = ({filter, children, setVisibility}) => {

  const handleSetFilter = (e) => {
    e.preventDefault();
    setVisibility(filter)
  }

  return (
    <a href="#" onClick={handleSetFilter}>
      {children}
    </a>
  );
};



const mapDispatchToProps = (dispatch) => {
  return {
    setVisibility: (filter) => dispatch(visibilityActions.setVisibilityFilter(filter))
  }
}



export default connect(null, mapDispatchToProps)(VisibilityFilter);