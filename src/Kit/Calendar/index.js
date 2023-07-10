import React, { useState, useEffect, useRef, } from "react";
import CalendarForm from "./CalendarForm";
import jmoment from "moment-jalaali";
import moment from "moment";
import PropTypes from "prop-types";
// import { FormGroup, FormLabel, FormError } from "../Form";
// import ThemeContext from "../ThemeProvider/ThemeContext";
import { withTheme } from "styled-components";
// import Tooltip from "../Tooltip";
// import InformationIcon from "../Icon/InformationIcon";
// import { defaultTheme } from "../defaultTheme";
const Calendar = (props) => {
  const [show, setShow] = useState(false);
  const CalendarViewRef = useRef();
  // const theme = useContext(ThemeContext).theme;
  const {
    onChange,
    onSelect,
    onPress,
    initialDate,
    error,
    // label,
    // require,
    // labelPosition,
    // moreInfo,
    // showErrorMessage,
  } = props;
  let initDate = initialDate ? new Date(initialDate) : null;
  const [now, setNow] = useState(Date.now());
  const [selected, setSelected] = useState({
    day:
      moment(initDate).isValid() === true
        ? Number(jmoment(now).format("jDD"))
        : "",
    month:
      moment(initDate).isValid() === true
        ? Number(jmoment(now).format("jMM"))
        : "",
    year:
      moment(initDate).isValid() === true
        ? Number(jmoment(now).format("jYYYY"))
        : "",
  });
  const [view, setView] = useState({
    day: Number(jmoment(now).format("jDD")),
    month: Number(jmoment(now).format("jMM")),
    year: Number(jmoment(now).format("jYYYY")),
  });
  const resetCalendar = () => {
    setSelected({
      day: Number(jmoment(Date.now()).format("jDD")),
      month: Number(jmoment(Date.now()).format("jMM")),
      year: Number(jmoment(Date.now()).format("jYYYY")),
    });
    setView({
      day: Number(jmoment(Date.now()).format("jDD")),
      month: Number(jmoment(Date.now()).format("jMM")),
      year: Number(jmoment(Date.now()).format("jYYYY")),
    });
    let date = moment(Date.now()).format("YYYY-MM-DD");
    if (moment(date).isValid() === true) {
      onChange(date);
    } else {
      onChange(null);
    }
  };
  useEffect(() => {
    let date = initialDate ? new Date(initialDate) : null;
    if (moment(date).isValid() === true) {
      let initialDateStamp = date.getTime();
      setNow(date.getTime());
      setSelected({
        day: Number(jmoment(initialDateStamp).format("jDD")),
        month: Number(jmoment(initialDateStamp).format("jMM")),
        year: Number(jmoment(initialDateStamp).format("jYYYY")),
      });
      setView({
        day: Number(jmoment(initialDateStamp).format("jDD")),
        month: Number(jmoment(initialDateStamp).format("jMM")),
        year: Number(jmoment(initialDateStamp).format("jYYYY")),
      });
    } else {
      setSelected({
        day: "",
        month: "",
        year: "",
      });
    }
  }, [initialDate]);

  const calendarViewHandler = (status) => {
    setShow(status);
    onPress && onPress();
  };
  return (
    <>
      <CalendarForm
        CalendarViewRef={CalendarViewRef}
        view={view}
        show={show}
        setShow={setShow}
        setView={setView}
        selected={selected}
        setSelected={setSelected}
        resetCalendar={resetCalendar}
        calendarChangeHandler={onChange}
        calendarSelectHandler={onSelect}
        calendarViewHandler={calendarViewHandler}
        initialDate={initialDate ? new Date(initialDate) : null}
        error={error ? true : false}
      />
      {/* <FormError className="bict__formError">{showErrorMessage === false ? null : error}</FormError> */}
      {/* </FormGroup> */}
    </>
  );
};
Calendar.defaultProps = {
  initialDate: null,
  onSelect: null,
  onChange: null,
  error: "",
  lable: "",
  require: false,
};
Calendar.propTypes = {
  /**
   * تاریخ نمایش تقویم
   */
  initialDate: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  error: PropTypes.string,
  lable: PropTypes.string,
  require: PropTypes.bool,
};

export default withTheme(Calendar);
