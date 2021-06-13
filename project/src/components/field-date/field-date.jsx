import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default class FieldDate extends PureComponent {
  constructor(props) {
    super(props);
    this._ref = createRef();
    this._flatpickr = null;
  }

  _applyFlatpick() {
    const {date, onDateChange} = this.props;
    console.log(date, onDateChange);
    const dateRef = this._ref.current;

    if (this._flatpickr) {
      this._flatpickr.destroy();
      this._flatpickr = null;
    }
    this._flatpickr = flatpickr(dateRef, {
      altInput: true,
      altFormat: 'j.m.Y',
      allowInput: true,
      dateFormat: 'd-m-Y',
      maxDate: 'today',
      minDate: new Date().fp_incr(-7),
      onChange: function(dates) {
        onDateChange(dates[0]);
      }
    })
  }

  componentDidMount() {
    this._applyFlatpick();
  }

  componentWillUnmount() {
    if (this._flatpickr) {
      this._flatpickr.destroy();
      this._flatpickr = null;
    }
  }

  render() {
    const {date} = this.props;
    const formatedDate = flatpickr.formatDate(date, 'j.m.Y');
    return (
      <p className="convert-form__field field">
        <label className="visually-hidden" htmlFor="date">Дата для расчета курса валют</label>
        <input className="field__control field__control--input field__control--date" ref={this._ref} type="text" id="date" name="date" defaultValue={formatedDate} />
      </p>
    );
  }
}

FieldDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};