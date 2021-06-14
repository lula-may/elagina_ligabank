import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {propOpertaions} from "../props.js";
import {ActionCreator, Operation} from "../../reducer/reducer.js";
import {DEFAULT_PERCHASE_CURRENCY, DEFAULT_SALE_CURRENCY, DEFAULT_SALE_SUM } from "../../const.js";

const App = (props) => {
  const {
    date,
    isLoading,
    hasError,
    rate,
    onConverterFormSubmit,
    onDateChange,
    onHistoryReset,
    operations,
  } = props;

  return (
    <Main
      date={date}
      hasError={hasError}
      isLoading={isLoading}
      onConverterFormSubmit={onConverterFormSubmit}
      onDateChange={onDateChange}
      onHistoryReset={onHistoryReset}
      operations={operations}
      perchaseCurrency={DEFAULT_PERCHASE_CURRENCY}
      rate={rate}
      saleCurrency={DEFAULT_SALE_CURRENCY}
      saleSum={DEFAULT_SALE_SUM}
    />
  );
}

const mapStateToProps = (state) => ({
  date: state.date,
  isLoading: state.isLoading,
  hasError: state.hasError,
  operations: state.operations,
  rate: state.rate,
});

const mapDispatchToProps = (dispatch) => ({
  onConverterFormSubmit(operation) {
    dispatch(ActionCreator.addNewOperation(operation))
  },
  onDateChange(date) {
    console.log('DateChanged');
    dispatch(ActionCreator.setDate(date));
    dispatch(Operation.loadRate(date));
  },
  onHistoryReset() {
    dispatch(ActionCreator.clearOperations())
  },
});

App.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onConverterFormSubmit: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onHistoryReset: PropTypes.func.isRequired,
  operations: propOpertaions,
  rate: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

