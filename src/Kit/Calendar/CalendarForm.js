import React, { useState } from "react";
import { Formik } from "formik";
import { Input, CalenderInputsRow } from "./style.js";
import { calendarSchema } from "./schema";
import CalendarView from "./CalendarView";
import moment from "moment-jalaali";
import CalendarIcon from "../../Assets/icons/CalendarIcon.jsx";
import { withTheme } from "styled-components";

const CalendarForm = ({
  view,
  setView,
  selected,
  setSelected,
  resetCalendar,
  calendarChangeHandler,
  calendarSelectHandler,
  initialDate,
  error,
  show,
  setShow,
  calendarViewHandler,
  CalendarViewRef,
  theme,
}) => {
  const [selectMode, setSelectMode] = useState("day");
  const goToday = () => {
    resetCalendar();
    calendarViewHandler(false);
  };

  const inpurRowFocusHandler = () => {
    let classList = CalendarViewRef.current.classList;
    if (classList.contains("focus") === true) {
      classList.remove("focus");
    } else {
      classList.add("focus");
    }
  };
  return (
    <CalenderInputsRow
      className="calendar__inputs__row"
      ref={CalendarViewRef}
      theme={theme}
      tabIndex="1"
      onFocus={inpurRowFocusHandler}
      onBlur={inpurRowFocusHandler}
      error={error}
    >
      <Formik
        initialValues={{
          year: moment(initialDate).isValid() === false ? selected.year : "",
          month: moment(initialDate).isValid() === false ? selected.month : "",
          day: moment(initialDate).isValid() === false ? selected.day : "",
        }}
        validationSchema={calendarSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form  autoComplete="OFF" onSubmit={formik.handleSubmit}>
            <Input
              className="calendar__year__input"
              error={error}
              placeholder="سال"
              type="text"
              name="year"
              id="year"
              onChange={(e) => {
                let value = e.target.value;
                formik.setFieldValue("year", value);
                setSelected({
                  ...selected,
                  year: value,
                });
                let year = Number(value);
                if (value.length === 4 && year < 1500) {
                  setView({
                    ...view,
                    year: value,
                  });
                  let date = moment(
                    `${value}-${selected.month}-${selected.day}`,
                    "jYYYY-jMM-jDD"
                  ).format("YYYY-MM-DD");
                  if (moment(date).isValid() === true) {
                    calendarChangeHandler(date);
                  } else {
                    calendarChangeHandler(null);
                  }
                } else {
                  calendarChangeHandler(null);
                }
              }}
              value={selected.year}
            />
            |
            <Input
              error={error}
              className="calendar__month__input"
              placeholder="ماه"
              type="text"
              name="month"
              id="month"
              onChange={(e) => {
                let value = e.target.value;
                formik.setFieldValue("month", value);
                // let day = Number(selected.day);
                let month = Number(value);
                // let year = Number(selected.year);
                if (month < 13) {
                  setSelected({
                    ...selected,
                    month: value,
                  });

                  if (month > 0) {
                    setView({
                      ...view,
                      month: value,
                    });
                    let date = moment(
                      `${selected.year}-${value}-${selected.day}`,
                      "jYYYY-jMM-jDD"
                    ).format("YYYY-MM-DD");
                    let yearStr = `${selected.year}`;
                    if (
                      yearStr.length === 4 &&
                      moment(date).isValid() === true
                    ) {
                      calendarChangeHandler(date);
                    } else {
                      calendarChangeHandler(null);
                    }
                  }
                }
              }}
              value={selected.month}
            />
            |
            <Input
              error={error}
              type="text"
              placeholder="روز"
              className="calendar__day__input"
              name="day"
              id="day"
              onChange={(e) => {
                let value = e.target.value;
                formik.setFieldValue("day", value);
                let day = Number(value);
                // let month = Number(selected.month);
                // let year = Number(selected.year);
                if (day < 32) {
                  setSelected({
                    ...selected,
                    day: value,
                  });
                  setView({
                    ...view,
                    day: value,
                  });
                  let date = moment(
                    `${selected.year}-${selected.month}-${value}`,
                    "jYYYY-jMM-jDD"
                  ).format("YYYY-MM-DD");
                  let yearStr = `${selected.year}`;
                  if (yearStr.length === 4 && moment(date).isValid() === true) {
                    calendarChangeHandler(date);
                  } else {
                    calendarChangeHandler(null);
                  }
                }
              }}
              value={selected.day}
            />
          </form>
        )}
      </Formik>
      <div
        className="calendar__view__button"
        onClick={(e) => {
          e.preventDefault();
          setSelectMode("day");
          calendarViewHandler(!show);
        }}
      >
        <CalendarIcon stroke={theme.color_icon_primary}/>
      </div>
      {show === true && (
        <CalendarView
          setShow={setShow}
          view={view}
          setView={setView}
          selected={selected}
          setSelected={setSelected}
          calendarViewHandler={calendarViewHandler}
          selectMode={selectMode}
          setSelectMode={setSelectMode}
          goToday={goToday}
          calendarSelectHandler={calendarSelectHandler}
        />
      )}
    </CalenderInputsRow>
  );
};

export default withTheme(CalendarForm);
